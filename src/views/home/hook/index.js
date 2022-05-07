import { useState } from 'react';

const useHome = () => {
  const [isSettingsOpen, setSettingsOpen] = useState();

  const toggleSettings = () => setSettingsOpen(s => !s);

  return { toggleSettings, isSettingsOpen };
};

export { useHome };
