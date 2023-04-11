import { LLMChain } from 'langchain/chains';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';
import { useEffect, useState } from 'react';

const LLMChainComponent: React.FC = () => {
  const [responseB, setResponseB] = useState('');
  const [responseD, setResponseD] = useState('');
  const [responseE, setResponseE] = useState('');

  useEffect(() => {
    const openAIApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const chat = new ChatOpenAI({ openAIApiKey, temperature: 0 });

    const translationPrompt = ChatPromptTemplate.fromPromptMessages([
      SystemMessagePromptTemplate.fromTemplate(
        'You are a helpful assistant that translates {input_language} to {output_language}.'
      ),
      HumanMessagePromptTemplate.fromTemplate('{text}'),
    ]);

    const conversationPrompt = ChatPromptTemplate.fromPromptMessages([
      HumanMessagePromptTemplate.fromTemplate('{text}'),
    ]);

    const chain = new LLMChain({
      prompt: translationPrompt,
      llm: chat,
    });

    const callChain = async () => {
      const resB = await chain.call({
        input_language: 'English',
        output_language: 'French',
        text: 'I love programming.',
      });
      setResponseB(resB.text);

      chain.prompt = conversationPrompt;

      const resD = await chain.call({
        text: 'hi from London, how are you doing today',
      });
      setResponseD(resD.text);

      const resE = await chain.call({
        text: 'Do you know where I am?',
      });
      setResponseE(resE.text);
    };

    callChain();
  }, []);
  return (
    <div className="border border-blue-400 p-2">
      <h2>4. Model + Prompt = LLMChain 🧩⛓️</h2>
      <p>
        Response B: <code>{responseB}</code>
      </p>
      <p>
        Response D: <code>{responseD}</code>
      </p>
      <p>
        Response E: <code>{responseE}</code>
      </p>
    </div>
  );
};

export default LLMChainComponent;
