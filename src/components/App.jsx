import React from 'react';
import MainContainer from './Main/MainContainer.jsx';
import MoviePageContainer from './MoviePage/MoviePageContainer.jsx';
import {Route, Switch} from 'react-router-dom';

const App = () => {

  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' render={() => <MainContainer />} />
        <Route exact path='/movie/:id?' render={() => <MoviePageContainer />} />
      </Switch>
    </React.Fragment>
  );
};

export default App;

