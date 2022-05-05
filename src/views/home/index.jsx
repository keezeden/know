import React from 'react';
import { QuizGenerator } from '../../components/quiz-generator';
import { QuizSelector } from '../../components/quiz-selector';
import { useHome } from './hook';

const Home = () => {
  const { selectedQuizType, selectQuizType } = useHome();

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center h-screen space-y-12">
        {!selectedQuizType ? <QuizSelector selectQuizType={selectQuizType} /> : <QuizGenerator type={selectedQuizType} />}
      </div>
    </div>
  );
};

export { Home };
