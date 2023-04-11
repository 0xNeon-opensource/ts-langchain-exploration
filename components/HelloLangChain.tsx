import { OpenAI } from 'langchain/llms/openai';
import { useEffect } from 'react';

interface HelloLangChainProps {}

const HelloLangChain: React.FC<HelloLangChainProps> = () => {
  useEffect(() => {
    const openAIApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const model = new OpenAI({ openAIApiKey, temperature: 0.9 });
    const callModel = async () => {
      const res = await model.call(
        'What would be a good company name a company that makes colorful socks?'
      );
      console.log(res);
    };
    callModel();
  }, []);

  return <div>Hello, LangChain! 🦜⛓️</div>;
};

export default HelloLangChain;
