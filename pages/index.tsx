import QuickstartChatModels from 'components/ChatModels/0_QuickstartChatModels';
import MultipleMessages from 'components/ChatModels/1_MultipleMessages';
import MultipleCompletions from 'components/ChatModels/2_MultipleCompletions';
import ChatPromptTemplates from 'components/ChatModels/3_ChatPromptTemplates';
import LLMChainComponent from 'components/ChatModels/4_ModelPlusPromptEqualsLlmChain';
import AgentsComponent from 'components/ChatModels/5_Agents';
import MemoryComponent from 'components/ChatModels/6_Memory';
import GitHubRepo from 'components/GitHubRepo/gitHubRepo';
import HelloLangChain from 'components/LLMs/0_HelloLangChain';
import PromptTemplates from 'components/LLMs/1_PromptTemplates';
import ChainedPromptTemplates from 'components/LLMs/2_ChainedPromptTemplates';
import AgentExample from 'components/LLMs/3_Agent';
import Expand from 'components/LLMs/Expand';
import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      Welcome to NΞ◎N&apos;s TypeScript LangChain Explorations!
      <Expand
        title="LLMs"
        content={
          <>
            <HelloLangChain />
            <PromptTemplates />
            <ChainedPromptTemplates />
            <AgentExample />
          </>
        }
      />
      <Expand
        title="Chat Models"
        content={
          <>
            <QuickstartChatModels />
            <MultipleMessages />
            <MultipleCompletions />
            <ChatPromptTemplates />
            <LLMChainComponent />
            <AgentsComponent />
            <MemoryComponent />
          </>
        }
      />
      <Expand
        title="GitHub Repo"
        content={
          <>
            <GitHubRepo />
          </>
        }
      />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
