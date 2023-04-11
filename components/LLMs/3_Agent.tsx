import { useState } from 'react';

const AgentExample: React.FC = () => {
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch(
      `/api/serp-api?input=${encodeURIComponent(input)}`
    );
    const data = await response.json();
    setResult(data.output);
  };
  return (
    <div className="border border-blue-400 p-2">
      <h2>3. Agent Example 🕵️‍♂️🔍 CURRENTLY DOES NOT WORK</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="agent-input">
          Input: <code>{input}</code>
        </label>
        <input
          type="text"
          id="agent-input"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your input"
        />
        <button type="submit">Execute</button>
      </form>
      {result && (
        <p>
          Output: <code>{result}</code>
        </p>
      )}
    </div>
  );
};

export default AgentExample;
