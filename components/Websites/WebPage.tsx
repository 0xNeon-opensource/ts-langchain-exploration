import Expand from 'components/LLMs/Expand';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

interface WebPageProps {}

const WebPage: React.FC<WebPageProps> = () => {
  const [url, setUrl] = useState('https://docs.sui.io/sui-jsonrpc');
  const [docs, setDocs] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const loadWebPage = async () => {
    setLoading(true);
    try {
      const encodedUrl = encodeURIComponent(url);
      const response = await fetch(`/api/get-webpage?url=${encodedUrl}`);
      if (!response.ok) {
        throw new Error('Failed to load web page');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      loadWebPage();
    }
  };

  return (
    <div className="border border-blue-400 p-2">
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Enter URL:</label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <Expand
        title="Web Page"
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

export default WebPage;
