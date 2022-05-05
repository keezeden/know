import React from 'react';
import { shuffle } from '../../utilities';

const Question = ({ question }) => {
  //     category: "Entertainment: Video Games"
  // correct_answer: "5"
  // difficulty: "easy"
  // incorrect_answers: (3) ['4', '3', '6']
  // question: "How many games in the Crash Bandicoot series were released on the original Playstation?"
  // type: "multiple"
  const { question: title, correct_answer: right, incorrect_answers: wrongs } = question;

  const answers = shuffle([right, ...wrongs]);

  return (
    <div>
      <p>{title}</p>
      <div>
        {answers.map(a => (
          <button className="w-2/3 focus:outline-none tracking-widest text-white uppercase text-lg my-2 h-16 rounded-lg bg-gradient">{a}</button>
        ))}
      </div>
    </div>
  );
};
export { Question };
