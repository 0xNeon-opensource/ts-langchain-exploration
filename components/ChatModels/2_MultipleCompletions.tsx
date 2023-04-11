import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanChatMessage, SystemChatMessage } from 'langchain/schema';
import { useEffect, useState } from 'react';

const MultipleCompletions: React.FC = () => {
  const [responseC, setResponseC] = useState<any[]>([]);

  const systemMessage =
    'You are a helpful assistant that translates English to French.';
  const humanMessage1 =
    'Translate this sentence from English to French. I love programming.';
  const humanMessage2 =
    'Translate this sentence from English to French. I love artificial intelligence.';

  useEffect(() => {
    const openAIApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const chat = new ChatOpenAI({ openAIApiKey, temperature: 0 });

    const callChatModel = async () => {
      const res = await chat.generate([
        [
          new SystemChatMessage(systemMessage),
          new HumanChatMessage(humanMessage1),
        ],
        [
          new SystemChatMessage(systemMessage),
          new HumanChatMessage(humanMessage2),
        ],
      ]);

      setResponseC(res.generations);
    };

    callChatModel();
  }, []);

  return (
    <div className="border border-blue-400 p-2">
      <h2>5. Multiple Completions 💬✅</h2>
      <p>
        System Message: <code>{systemMessage}</code>
      </p>
      <p>
        Human Messages: <code>{humanMessage1}</code> and{' '}
        <code>{humanMessage2}</code>
      </p>
      {responseC.length > 0 && (
        <p>
          Responses: <code>{responseC[0][0].text}</code> and{' '}
          <code>{responseC[1][0].text}</code>
        </p>
      )}
    </div>
  );
};

export default MultipleCompletions;
