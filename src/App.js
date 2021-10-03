import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Routes from './Routes';
import Results from './components/results';
import NavigationBar from './NavigationBar';
import EditFood from './containers/editFood';

const App = ({ store }) => {
  return (
    <div>
      <NavigationBar />
      <Provider store={store}>
        <Switch>
          {Routes.map((route) => (
            <Route exact path={route.path} key={route.path}>
              <route.component />
            </Route>
          ))}
          <Route exact path="/results" component={Results} />
          <Route exact path="/editFood/:id" component={EditFood} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;