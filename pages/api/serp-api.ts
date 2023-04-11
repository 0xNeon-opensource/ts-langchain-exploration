import { initializeAgentExecutor } from 'langchain/agents';
import { OpenAI } from 'langchain/llms/openai';
import { SerpAPI } from 'langchain/tools';
import { Calculator } from 'langchain/tools/calculator';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;

  const openAIApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  const model = new OpenAI({ openAIApiKey, temperature: 0 });
  const serpApiKey = process.env.NEXT_PUBLIC_SERP_API_KEY;
  const tools = [new SerpAPI(serpApiKey), new Calculator()];

  const executor = await initializeAgentExecutor(
    tools,
    model,
    'zero-shot-react-description'
  );
  console.log('Loaded agent.');

  const response = await executor.call({ query });

  const data = await response.json();
  res.status(200).json(data);
};

export default handler;
