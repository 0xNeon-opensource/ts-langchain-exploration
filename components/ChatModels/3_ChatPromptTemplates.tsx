import { ChatOpenAI } from 'langchain/chat_models/openai';
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';
import { useCallback, useState } from 'react';

const ChatPromptTemplates: React.FC = () => {
  const [responseA, setResponseA] = useState('');
  const [language, setLanguage] = useState('Algerian');
  const [textToTranslate, setTextToTranslate] = useState('I love programming.');

  const openAIApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  const chat = new ChatOpenAI({ openAIApiKey, temperature: 0 });

  const translationPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
      'You are a helpful assistant that translates {input_language} to {output_language}.'
    ),
    HumanMessagePromptTemplate.fromTemplate('{text}'),
  ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'language') {
      setLanguage(value);
    } else if (name === 'textToTranslate') {
      setTextToTranslate(value);
    }
  };

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const res = await chat.generatePrompt([
        await translationPrompt.formatPromptValue({
          input_language: 'English',
          output_language: language,
          text: textToTranslate,
        }),
      ]);

      setResponseA(res.generations[0][0].text);
    },
    [chat, language, textToTranslate, translationPrompt]
  );

  return (
    <div className="border border-blue-400 p-2">
      <h2>6. Chat Prompt Templates 💬📚✏️</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="language-input">
          Language:
          <input
            type="text"
            id="language-input"
            name="language"
            value={language}
            onChange={handleInputChange}
            placeholder="Enter a language"
          />
        </label>
        <br />
        <label htmlFor="text-input">
          Text to Translate:
          <input
            type="text"
            id="text-input"
            name="textToTranslate"
            value={textToTranslate}
            onChange={handleInputChange}
            placeholder="Enter text to translate"
          />
        </label>
        <br />
        <button type="submit">Translate</button>
      </form>
      {responseA && (
        <p>
          Response: <code>{responseA}</code>
        </p>
      )}
    </div>
  );
};

export default ChatPromptTemplates;
