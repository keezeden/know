import React from 'react';
import { Loading } from '../loading';
import { Question } from '../question';
import { useQuizGenerator } from './hook';

const QuizGenerator = ({ setCount, setStreak, setTotal }) => {
  const { questions, isLoading, index, next } = useQuizGenerator({ setCount, setStreak, setTotal });

  if (isLoading) return <Loading />;
  if (!questions.length) return <p>No results for that configuration</p>;

  const question = questions[index];

  return <Question question={question} onAnswer={next} />;
};
export { QuizGenerator };
