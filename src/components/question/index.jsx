import React from 'react';

import { useQuestion } from './hook';
// TODO: Move question formatting / desturturing to service for easy swappage of APIs
const Question = ({ question, onAnswer }) => {
  const { title, answers, onClick, reveal } = useQuestion(question, onAnswer);

  return (
    <div className="flex-col justify-center items-center space-y-16 w-full">
      <p className="tracking-wide uppercase text-2xl text-center">{title}</p>
      <div className="flex-col justify-center items-center h-full">
        {answers.map((a, i) => (
          <button
            key={i}
            onClick={onClick}
            className={`w-full focus:outline-none tracking-widest  uppercase text-lg my-4 h-16 rounded-lg ${
              reveal && a.answer ? 'bg-gradient text-white' : 'border-2 border-primary text-primary'
            } flex justify-center items-center`}
          >
            <p>{a.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
export { Question };
