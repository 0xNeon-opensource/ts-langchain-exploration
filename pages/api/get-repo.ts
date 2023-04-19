// pages/api/get-repo.ts
import { GithubRepoLoader } from 'langchain/document_loaders/web/github';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const loader = new GithubRepoLoader(
      'https://github.com/hwchase17/langchainjs',
      { branch: 'main', recursive: false, unknown: 'warn' }
    );
    const docs = await loader.load();
    res.status(200).json(docs);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export default handler;
