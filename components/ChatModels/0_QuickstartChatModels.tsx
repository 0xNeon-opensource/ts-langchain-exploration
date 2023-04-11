import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanChatMessage } from 'langchain/schema';
import { useEffect, useState } from 'react';

const QuickstartChatModels: React.FC = () => {
  const [response, setResponse] = useState('');

  const inputMessage =
    'Translate this sentence from English to French. I love programming.';

  useEffect(() => {
    const openAIApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const chat = new ChatOpenAI({ openAIApiKey, temperature: 0 });

    const callChatModel = async () => {
      const res = await chat.call([new HumanChatMessage(inputMessage)]);

      setResponse(res.text);
    };

    callChatModel();
  }, []);

  return (
    <div className="border border-blue-400 p-2">
      <h2>0. Quickstart Chat Models 💬🚀</h2>
      <p>
        Input Message: <code>{inputMessage}</code>
      </p>
      <p>
        Response: <code>{response}</code>
      </p>
    </div>
  );
};

export default QuickstartChatModels;
