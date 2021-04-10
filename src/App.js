import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieContainer from './component/Movies/MovieContainer';

const App = () => {

  return (
      <Router>
        <Switch>
          <Route
            exact path='/'
            render={() =>
              <Redirect to={'/movie'} />}
          />
          <Route
            path='/movie'
            component={MovieContainer} />
          <Route
            path='*'
            render={() => <div>404 NOT FOUND</div>} />
        </Switch>
      </Router>
  )
}

export default App;
