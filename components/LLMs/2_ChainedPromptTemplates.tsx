import { LLMChain } from 'langchain/chains';
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { useState } from 'react';

const ChainedPromptTemplates: React.FC = () => {
  const [result, setResult] = useState('');
  const [inputVariable, setInputVariable] = useState('');

  const template = 'What is a good name for a company that makes {product}?';
  const prompt = new PromptTemplate({
    template: template,
    inputVariables: ['product'],
  });

  const openAIApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  const model = new OpenAI({ openAIApiKey, temperature: 0.9 });

  const chain = new LLMChain({ llm: model, prompt: prompt });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVariable(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await chain.call({ product: inputVariable });
    setResult(res.text.trim());
  };

  return (
    <div className="border border-blue-400 p-2">
      <h2>2. Chained Prompt Templates 📚🔗</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product-input">
          Input Variable: <code>{inputVariable}</code>
        </label>
        <input
          type="text"
          id="product-input"
          value={inputVariable}
          onChange={handleInputChange}
          placeholder="Enter a product"
        />
        <button type="submit">Generate</button>
      </form>
      <p>
        Template: <code>{template}</code>
      </p>
      {result && (
        <p>
          Outputted prompt: <code>{result}</code>
        </p>
      )}
    </div>
  );
};

export default ChainedPromptTemplates;
