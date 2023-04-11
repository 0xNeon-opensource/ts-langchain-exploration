import { OpenAI } from 'langchain/llms/openai';
import { useEffect, useState } from 'react';

interface HelloLangChainProps {}

const HelloLangChain: React.FC<HelloLangChainProps> = () => {
  const [result, setResult] = useState('');

  const prompt =
    'What would be a good company name a company that makes colorful socks?';

  useEffect(() => {
    const openAIApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const model = new OpenAI({ openAIApiKey, temperature: 0.9 });
    const callModel = async () => {
      const res = await model.call(prompt);
      setResult(res);
    };
    callModel();
  }, []);

  return (
    <div className="border border-blue-400 p-2">
      <h2>0. Hello, LangChain! 🦜⛓️</h2>
      <p>
        Prompt: <code>{prompt}</code>
      </p>
      <p>
        Result: <code>{result}</code>
      </p>
    </div>
  );
};

export default HelloLangChain;
