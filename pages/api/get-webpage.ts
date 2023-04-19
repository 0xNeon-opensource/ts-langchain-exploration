// pages/api/get-webpage.ts
import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = req.query.url as string;

  if (!url) {
    res.status(400).json({ message: 'Missing url parameter' });
    return;
  }

  try {
    const loader = new CheerioWebBaseLoader(url);
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
