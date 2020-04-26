import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Routes from './Routes';

import NavigationBar from './NavigationBar';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Switch>
        {Routes.map((route) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </div>
  );
}

export default App;