import React from 'react';
import { QuizTypeSelector } from '../../components/quiz-type-selector';
import { useHome } from './hook';

const Home = () => {
  const { selectedQuizType, selectQuizType } = useHome();

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center h-screen space-y-12">
        {!selectedQuizType ? (
          <QuizTypeSelector selectQuizType={selectQuizType} />
        ) : (
          <div>You are currently using the quiz type: {selectedQuizType}</div>
        )}
      </div>
    </div>
  );
};

export { Home };
