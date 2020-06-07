import React from 'react';
import PropTypes from 'prop-types';
import MainContainer from './Main/MainContainer.jsx';
import MoviePageContainer from './MoviePage/MoviePageContainer.jsx';
import {Route, Switch} from 'react-router-dom';
import {getFilms, setCurrentMovieId, getFilmComments} from './../redux/filmsReducer.js';
import {connect} from 'react-redux';
import VideoPlayerContainer from './common/VideoPlayer/VideoPlayerContainer.jsx';
import SignInContainer from './SignIn/SignInContainer.jsx';
import AddReviewContainer from './AddReview/AddReviewContainer.jsx';

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
              this.props.getFilmComments(+match.params.id);
              return <MoviePageContainer />;
            }}
          />

          <Route exact path='/video/:id?' render={
            ({match}) => {
              this.props.setCurrentMovieId(+match.params.id);
              return <VideoPlayerContainer />;
            }}
          />

          <Route exact path='/:id/add' render={
            ({match}) => {
              this.props.setCurrentMovieId(+match.params.id);
              return <AddReviewContainer />;
            }}
          />

          <Route exact path='/auth' render={() => <SignInContainer />} />

          <Route render={() => (<h1>Страница не найдена</h1>)} />
        </Switch>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  getFilms: PropTypes.func.isRequired,
  setCurrentMovieId: PropTypes.func.isRequired,
  getFilmComments: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  getFilms,
  setCurrentMovieId,
  getFilmComments,
};

export default connect(null, mapDispatchToProps)(App);

