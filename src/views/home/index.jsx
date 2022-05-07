import React from 'react';
import { CogIcon } from '../../components/cog-icon';
import { Dropdown } from '../../components/dropdown';
import { QuizGenerator } from '../../components/quiz-generator';
import { useHome } from './hook';

const Home = () => {
  const { toggleSettings, isSettingsOpen } = useHome();

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <button className="z-50 h-16 w-16 absolute top-0 left-0 m-4 focus:outline-none" onClick={toggleSettings}>
        <CogIcon className="text-primary stroke-1" />
      </button>
      {isSettingsOpen ? (
        <div className="absolute left-0 h-screen pt-32 w-1/5 center p-8 space-y-4">
          <Dropdown name="provider" items={[{ value: 'open-trivia', text: 'Open Trivia' }]} />
          <Dropdown name="category" items={[{ value: 'random', text: 'Random' }]} />
          <Dropdown
            name="difficulty"
            items={[
              { value: 'easy', text: 'Easy' },
              { value: 'medium', text: 'Medium' },
              { value: 'Hard', text: 'Hard' }
            ]}
          />
          <Dropdown
            name="type"
            items={[
              { value: 'any', text: 'Any' },
              { value: 'boolean', text: 'True / False' },
              { value: 'multiple', text: 'Multiple Choice' }
            ]}
          />
        </div>
      ) : null}
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center h-screen space-y-12">
        <QuizGenerator />
      </div>
    </div>
  );
};

export { Home };
