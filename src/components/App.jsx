import React from 'react';
import MainContainer from './Main/MainContainer.jsx';
import MoviePage from './MoviePage/MoviePage.jsx';
import {Route, Switch} from 'react-router-dom';

const App = () => {

  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route exact path='/film' component={MoviePage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;

