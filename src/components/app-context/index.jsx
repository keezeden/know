import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [settings, setSettings] = useState({});

  const value = { settings, setSettings };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider');
  }
  return context;
};

export { AppProvider, useApp };
