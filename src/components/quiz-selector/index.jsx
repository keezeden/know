import React from 'react';

const QuizSelector = ({ selectQuizType }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <button
        className="w-2/3 focus:outline-none tracking-widest text-white uppercase text-lg my-2 h-16 rounded-lg bg-gradient"
        onClick={() => selectQuizType('random')}
      >
        Random
      </button>
      <button
        className="w-2/3 focus:outline-none tracking-widest text-white uppercase text-lg my-2 h-16 rounded-lg bg-gradient"
        onClick={() => selectQuizType('categories')}
      >
        Categories
      </button>
    </div>
  );
};
export { QuizSelector };
