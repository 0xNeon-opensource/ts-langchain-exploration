import type { NextApiRequest, NextApiResponse } from 'next';
import getPages from '../../lib/getPages';

interface Page {
  name: string;
}

interface GetPagesResponse {
  pages: Page[];
  error?: string; // Optional error property
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetPagesResponse>
) {
  try {
    const pages = await getPages('./pages');
    res.status(200).json({ pages });
  } catch (error) {
    console.error('Error fetching pages:', error);
    res.status(500).json({
      error: 'Unable to fetch pages.',
      pages: [],
    });
  }
}
