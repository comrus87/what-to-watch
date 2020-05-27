import React from 'react';
import PropTypes from 'prop-types';
import MainContainer from './Main/MainContainer.jsx';
import MoviePageContainer from './MoviePage/MoviePageContainer.jsx';
import {Route, Switch} from 'react-router-dom';
import {getFilms, setCurrentMovieId} from './../redux/filmsReducer.js';
import {connect} from 'react-redux';


class App extends React.PureComponent {

  componentDidMount() {
    this.props.getFilms();
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' render={() => <MainContainer />} />

          <Route exact path='/movie/:id?' render={
            ({match}) => {
              this.props.setCurrentMovieId(+match.params.id);
              return <MoviePageContainer />;
            }}
          />

          <Route render={() => (<h1>Страница не найдена</h1>)} />
        </Switch>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  getFilms: PropTypes.func.isRequired,
  setCurrentMovieId: PropTypes.func.isRequired
};

export default connect(null, {getFilms, setCurrentMovieId})(App);

