import React from 'react';
import { CogIcon } from '../../components/cog-icon';
import { Dropdown } from '../../components/dropdown';
import { QuizGenerator } from '../../components/quiz-generator';
import { ScoreCounter } from '../../components/score-counter';
import { useHome } from './hook';

const Home = () => {
  const {
    toggleSettings,
    isSettingsOpen,
    setDifficulty,
    setCategory,
    setType,
    settings,
    count,
    streak,
    setCount,
    setStreak,
    total,
    setTotal
  } = useHome();

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <button className="z-50 h-16 w-16 absolute top-0 left-0 m-4 focus:outline-none" onClick={toggleSettings}>
        <CogIcon className="text-primary stroke-1" />
      </button>
      {isSettingsOpen ? (
        <div className="absolute left-0 h-screen pt-32 w-1/5 center p-8 space-y-4">
          <Dropdown value={settings.provider} name="provider" items={[{ value: 'open-trivia', text: 'Open Trivia' }]} />
          <Dropdown
            value={settings.category}
            onChange={e => setCategory(e.currentTarget.value)}
            name="category"
            items={[
              { value: 'any', text: 'Any' },
              { value: '9', text: 'General Knowledge' },
              { value: '10', text: 'Entertainment: Books' },
              { value: '11', text: 'Entertainment: Film' },
              { value: '12', text: 'Entertainment: Music' },
              { value: '13', text: 'Entertainment: Musicals &amp; Theatres' },
              { value: '14', text: 'Entertainment: Television' },
              { value: '15', text: 'Entertainment: Video Games' },
              { value: '16', text: 'Entertainment: Board Games' },
              { value: '17', text: 'Science & Nature' },
              { value: '18', text: 'Science: Computers' },
              { value: '19', text: 'Science: Mathematics' },
              { value: '20', text: 'Mythology' },
              { value: '21', text: 'Sports' },
              { value: '22', text: 'Geography' },
              { value: '23', text: 'History' },
              { value: '24', text: 'Politics' },
              { value: '25', text: 'Art' },
              { value: '26', text: 'Celebrities' },
              { value: '27', text: 'Animals' },
              { value: '28', text: 'Vehicles' },
              { value: '29', text: 'Entertainment: Comics' },
              { value: '30', text: 'Science: Gadgets' },
              { value: '31', text: 'Entertainment: Japanese Anime & Manga' },
              { value: '32', text: 'Entertainment: Cartoon & Animations' }
            ]}
          />
          <Dropdown
            value={settings.difficulty}
            onChange={e => setDifficulty(e.currentTarget.value)}
            name="difficulty"
            items={[
              { value: 'any', text: 'Any' },
              { value: 'easy', text: 'Easy' },
              { value: 'medium', text: 'Medium' },
              { value: 'hard', text: 'Hard' }
            ]}
          />
          <Dropdown
            value={settings.type}
            onChange={e => setType(e.currentTarget.value)}
            name="type"
            items={[
              { value: 'any', text: 'Any' },
              { value: 'boolean', text: 'True / False' },
              { value: 'multiple', text: 'Multiple Choice' }
            ]}
          />
        </div>
      ) : null}
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center h-screen">
        <QuizGenerator setCount={setCount} setStreak={setStreak} setTotal={setTotal} />
        <ScoreCounter streak={streak} count={count} total={total} />
      </div>
    </div>
  );
};

export { Home };
