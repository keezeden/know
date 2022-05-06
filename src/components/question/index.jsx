import React from 'react';
import he from 'he';
import { shuffle } from '../../utilities';
// TODO: Move question formatting / desturturing to service for easy swappage of APIs
const Question = ({ question, onAnswer }) => {
  // category: "Entertainment: Video Games"
  // correct_answer: "5"
  // difficulty: "easy"
  // incorrect_answers: (3) ['4', '3', '6']
  // question: "How many games in the Crash Bandicoot series were released on the original Playstation?"
  // type: "multiple"
  const { question: title, correct_answer: right, incorrect_answers: wrongs } = question;

  const formatter = text => he.decode(text);

  const answers = shuffle([right, ...wrongs]);
  const formatted = answers.map(formatter);

  return (
    <div className="flex-col justify-center items-center space-y-16 w-full">
      <p className="tracking-wide uppercase text-2xl text-center">{formatter(title)}</p>
      <div className="flex-col justify-center items-center h-full">
        {formatted.map((a, i) => (
          <button
            key={i}
            onClick={onAnswer}
            className="w-full focus:outline-none tracking-widest text-white uppercase text-lg my-2 h-16 rounded-lg bg-gradient"
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
};
export { Question };
