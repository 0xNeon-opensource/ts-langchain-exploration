import { ConversationChain } from 'langchain/chains';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { BufferMemory } from 'langchain/memory';
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  MessagesPlaceholder,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';
import { useEffect, useState } from 'react';

const MemoryComponent: React.FC = () => {
  const [responseH, setResponseH] = useState('');

  useEffect(() => {
    const openAIApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const chat = new ChatOpenAI({ openAIApiKey, temperature: 0 });

    const chatPrompt = ChatPromptTemplate.fromPromptMessages([
      SystemMessagePromptTemplate.fromTemplate(
        'The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.'
      ),
      new MessagesPlaceholder('history'),
      HumanMessagePromptTemplate.fromTemplate('{input}'),
    ]);

    const chain = new ConversationChain({
      memory: new BufferMemory({ returnMessages: true, memoryKey: 'history' }),
      prompt: chatPrompt,
      llm: chat,
    });

    const callChain = async () => {
      const resH = await chain.call({
        input: 'hi! whats up?',
      });
      setResponseH(resH.text);
    };

    callChain();
  }, []);

  return (
    <div className="border border-blue-400 p-2">
      <h2>9. Memory: Add State to Chains and Agents 🧠🔗</h2>
      <p>
        Input: <code>{'hi! whats up?'}</code>
      </p>
      <p>
        Response H: <code>{responseH}</code>
      </p>
    </div>
  );
};

export default MemoryComponent;
