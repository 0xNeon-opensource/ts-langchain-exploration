import HelloLangChain from 'components/0_HelloLangChain';
import PromptTemplates from 'components/1_PromptTemplates';
import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      Welcome to NΞ◎N&apos;s NextJS Starter repo!
      <HelloLangChain />
      <PromptTemplates />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
