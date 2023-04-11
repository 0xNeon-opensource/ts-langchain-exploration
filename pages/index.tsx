import QuickstartChatModels from 'components/ChatModels/0_QuickstartChatModels';
import MultipleMessages from 'components/ChatModels/1_MultipleMessages';
import MultipleCompletions from 'components/ChatModels/2_MultipleCompletions';
import ChatPromptTemplates from 'components/ChatModels/3_ChatPromptTemplates';
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
      Welcome to NΞ◎N&apos;s NextJS Starter repo!
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
