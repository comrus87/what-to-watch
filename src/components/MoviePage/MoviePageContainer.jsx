import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviePage from './MoviePage.jsx';
import {getMovieIdSelector, getMoreMovieSelector} from './../../redux/selectors.js';
import {FilmPropType} from './../../utils/types.js';

class MoviePageContainer extends React.PureComponent {

  render() {
    return (
      <MoviePage
        film={this.props.film}
        moreFilms={this.props.moreFilms}
      />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    film: getMovieIdSelector(state),
    moreFilms: getMoreMovieSelector(state)
  };
};

MoviePageContainer.propTypes = {
  film: FilmPropType,
  moreFilms: PropTypes.arrayOf(FilmPropType)
};

export default connect(mapStateToProps)(MoviePageContainer);


