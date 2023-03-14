import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Page {
  name: string;
}

const TableOfContents = () => {
  const router = useRouter();
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    const fetchPages = async () => {
      const basePath = router.basePath || '';
      const apiEndpoint = `${basePath}/api/get-pages`;

      try {
        const response = await fetch(apiEndpoint);
        const { pages } = await response.json();
        setPages(pages);
      } catch (error) {
        console.error('Error fetching pages:', error);
      }
    };

    fetchPages();
  }, [router]);

  return (
    <nav>
      <h2>Table of Contents</h2>
      <ul>
        {pages.map((page) => (
          <li key={page.name}>
            <a href={page.name}>{page.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
