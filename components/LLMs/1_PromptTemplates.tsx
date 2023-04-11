import { PromptTemplate } from 'langchain';
import { OpenAI } from 'langchain/llms/openai';
import { useEffect, useState } from 'react';

const PromptTemplates: React.FC = () => {
  const [result, setResult] = useState('');

  const template = 'What is a good name for a company that makes {product}?';
  const prompt = new PromptTemplate({
    template: template,
    inputVariables: ['product'],
  });
  const inputVariable = 'colorful socks';

  useEffect(() => {
    const openAIApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const model = new OpenAI({ openAIApiKey, temperature: 0.9 });
    const callModel = async () => {
      const res = await prompt.format({ product: 'colorful socks' });
      setResult(res);
    };
    callModel();
  }, []);

  return (
    <div className="border border-blue-400 p-2">
      <h2>1. Prompt Templates 📚✏️</h2>
      <p>
        Template: <code>{template}</code>
      </p>
      <p>
        Input Variable: <code>{inputVariable}</code>
      </p>
      <p>
        Outputted prompt: <code>{result}</code>
      </p>
    </div>
  );
};

export default PromptTemplates;
