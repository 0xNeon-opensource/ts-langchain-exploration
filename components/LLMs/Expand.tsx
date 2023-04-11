import React, { useState } from 'react';

interface ExpandProps {
  title: string;
  content: React.ReactNode;
}

const Expand: React.FC<ExpandProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <button
        onClick={toggleExpand}
        className="text-left text-lg font-bold flex items-center gap-x-2"
      >
        {isOpen ? '▼' : '►'} {title}
      </button>
      {isOpen && <div className="ml-4">{content}</div>}
    </div>
  );
};

export default Expand;
