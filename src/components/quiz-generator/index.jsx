import React from 'react';
import { Question } from '../question';
import { useQuizGenerator } from './hook';

const QuizGenerator = ({ type }) => {
  const { questions, index, next } = useQuizGenerator();

  if (!questions.length) return <p>Loading...</p>;

  const question = questions[index];

  return <Question question={question} onAnswer={next} />;
};
export { QuizGenerator };
