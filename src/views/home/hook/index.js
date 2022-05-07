import { useState } from 'react';
import { useApp } from '../../../components/app-context';

const useHome = () => {
  const [isSettingsOpen, setSettingsOpen] = useState();

  const { settings, setSettings } = useApp();

  const setDifficulty = difficulty => setSettings({ ...settings, difficulty });
  const setType = type => setSettings({ ...settings, type });
  const setCategory = category => setSettings({ ...settings, category });

  const toggleSettings = () => setSettingsOpen(s => !s);

  return { toggleSettings, isSettingsOpen, setType, setDifficulty, setCategory };
};

export { useHome };
