import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import MovieContainer from './component/Movies/MovieContainer';
import Recommendation from './component/Movies/Recommendations';
import SingleMovieContainer from './component/Movies/SingleMovieContainer';

const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact path='/'
          render={() =>
            <Redirect to={'/movie/popular'} />}
        />
        <Route
          exact path='/movie'
          render={() =>
            <Redirect to={'/movie/popular'} />}
        />
        <Route path='/movie/popular'>
          <MovieContainer />
        </Route>
        <Route
          path='/movie/:id'
        >
          <SingleMovieContainer />
        </Route>

        <Route
          path='*'
          render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </Router>
  )
}

export default App;
