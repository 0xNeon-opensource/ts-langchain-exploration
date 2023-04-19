import { useEffect, useState } from 'react';

interface GitHubRepoProps {}

const GitHubRepo: React.FC<GitHubRepoProps> = () => {
  const [docs, setDocs] = useState(null);

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
      }
    };
    loadGitHubRepo();
  }, []);

  return <div>GitHub Repo</div>;
};

export default GitHubRepo;
