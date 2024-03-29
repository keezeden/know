import { useState } from 'react';
import { useApp } from '../../../components/app-context';

const useHome = () => {
  const [isSettingsOpen, setSettingsOpen] = useState();
  const [count, setCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [total, setTotal] = useState(0);

  const { settings, setSettings } = useApp();

  const setDifficulty = difficulty => setSettings({ ...settings, difficulty });
  const setType = type => setSettings({ ...settings, type });
  const setCategory = category => setSettings({ ...settings, category });

  const toggleSettings = () => setSettingsOpen(s => !s);

  return { toggleSettings, isSettingsOpen, setType, setDifficulty, setCategory, settings, count, setCount, streak, setStreak, total, setTotal };
};

export { useHome };
