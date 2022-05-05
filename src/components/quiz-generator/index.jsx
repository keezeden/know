import React from 'react';
import { Question } from '../question';
import { useQuizGenerator } from './hook';

const QuizGenerator = ({ type }) => {
  const { questions } = useQuizGenerator();

  if (!questions.length) return <p>Loading...</p>;

  const [first] = questions;

  return <Question question={first} />;
};
export { QuizGenerator };
