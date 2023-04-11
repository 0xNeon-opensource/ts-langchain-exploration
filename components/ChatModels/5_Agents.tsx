import { AgentExecutor, Tool, ZeroShotAgent } from 'langchain/agents';
import { LLMChain } from 'langchain/chains';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';
import { useEffect, useState } from 'react';

class SerpAPI extends Tool {
  name = 'SerpAPI';
  description = 'Search using SerpAPI';

  protected async _call(arg: string): Promise<string> {
    // Implement the actual search functionality here using SerpAPI
    // For demonstration purposes, we'll return a dummy value
    return '38,626,704';
  }
}

const AgentsComponent: React.FC = () => {
  const [responseG, setResponseG] = useState('');

  useEffect(() => {
    const openAIApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const chat = new ChatOpenAI({ openAIApiKey, temperature: 0 });

    const tools = [new SerpAPI()];

    const prompt = ZeroShotAgent.createPrompt(tools, {
      prefix: `Answer the following questions as best you can, but speaking as a pirate might speak. You have access to the following tools:`,
      suffix: `Begin! Remember to speak as a pirate when giving your final answer. Use lots of "Args"`,
    });

    const chatPrompt = ChatPromptTemplate.fromPromptMessages([
      new SystemMessagePromptTemplate(prompt),
      HumanMessagePromptTemplate.fromTemplate(`{input}

This was your previous work (but I haven't seen any of it! I only see what you return as final answer):
{agent_scratchpad}`),
    ]);

    const llmChain = new LLMChain({
      prompt: chatPrompt,
      llm: chat,
    });

    const agent = new ZeroShotAgent({
      llmChain,
      allowedTools: tools.map((tool) => tool.name),
    });

    const executor = AgentExecutor.fromAgentAndTools({ agent, tools });

    const callAgentExecutor = async () => {
      const resG = await executor.run(
        'How many people live in Canada as of 2023?'
      );
      setResponseG(resG.toString());
    };

    callAgentExecutor();
  }, []);

  return (
    <div className="border border-blue-400 p-2">
      <h2>8. Agents: Dynamically Run Chains Based on User Input 🤖🔧</h2>
      <p>
        Question: <code>{'How many people live in Canada as of 2023?'}</code>
      </p>
      <p>
        Response G: <code>{responseG}</code>
      </p>
    </div>
  );
};

export default AgentsComponent;
