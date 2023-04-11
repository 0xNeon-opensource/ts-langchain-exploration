import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanChatMessage, SystemChatMessage } from 'langchain/schema';
import { useEffect, useState } from 'react';

const MultipleMessages: React.FC = () => {
  const [response, setResponse] = useState('');

  const systemMessage =
    'You are a helpful assistant that translates English to French.';
  const humanMessage = 'Translate: I love programming.';

  useEffect(() => {
    const openAIApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const chat = new ChatOpenAI({ openAIApiKey, temperature: 0 });

    const callChatModel = async () => {
      const res = await chat.call([
        new SystemChatMessage(systemMessage),
        new HumanChatMessage(humanMessage),
      ]);

      setResponse(res.text);
    };

    callChatModel();
  }, []);

  return (
    <div className="border border-blue-400 p-2">
      <h2>1. Multiple Messages 💬🔁</h2>
      <p>
        System Message: <code>{systemMessage}</code>
      </p>
      <p>
        Human Message: <code>{humanMessage}</code>
      </p>
      <p>
        Response: <code>{response}</code>
      </p>
    </div>
  );
};

export default MultipleMessages;
