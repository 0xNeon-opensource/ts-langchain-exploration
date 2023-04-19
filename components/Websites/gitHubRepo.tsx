import Expand from 'components/LLMs/Expand';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

interface GitHubRepoProps {}

const GitHubRepo: React.FC<GitHubRepoProps> = () => {
  const [docs, setDocs] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGitHubRepo = async () => {
      try {
        const response = await fetch('/api/get-repo');
        if (!response.ok) {
          throw new Error('Failed to load GitHub repository');
        }
        const data = await response.json();
        setDocs(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadGitHubRepo();
  }, []);

  return (
    <div className="border border-blue-400 p-2">
      <Expand
        title="GitHub"
        content={
          <>
            {loading && <p>Loading...</p>}
            {!loading && docs && (
              <div className="overflow-auto max-w-lg">
                <ReactJson src={docs} />
              </div>
            )}
          </>
        }
      />
    </div>
  );
};

export default GitHubRepo;
