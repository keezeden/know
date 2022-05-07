import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../../components/app-context';
import { Home } from '../home';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path={['/', 'home']}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
};

export { App };
