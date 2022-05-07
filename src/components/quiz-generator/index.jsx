import React from 'react';
import { Question } from '../question';
import { useQuizGenerator } from './hook';

const QuizGenerator = ({ type }) => {
  const { questions, isLoading, index, next } = useQuizGenerator();

  if (isLoading) return <p>Loading...</p>;
  if (!questions.length) return <p>No results for that configuration</p>;

  const question = questions[index];

  return <Question question={question} onAnswer={next} />;
};
export { QuizGenerator };
