import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviePage from './MoviePage.jsx';
import {getMovieIdSelector, getMoreMovieSelector, getAuthSelector} from './../../redux/selectors.js';
import {FilmPropType} from './../../utils/types.js';

class MoviePageContainer extends React.PureComponent {

  render() {
    return (
      <MoviePage
        film={this.props.film}
        moreFilms={this.props.moreFilms}
        authStatus={this.props.authStatus}
      />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    film: getMovieIdSelector(state),
    moreFilms: getMoreMovieSelector(state),
    authStatus: getAuthSelector(state)
  };
};

MoviePageContainer.propTypes = {
  film: FilmPropType,
  moreFilms: PropTypes.arrayOf(FilmPropType),
  authStatus: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(MoviePageContainer);


