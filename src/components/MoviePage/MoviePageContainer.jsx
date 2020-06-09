import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviePage from './MoviePage.jsx';
import {getMovieIdSelector, getMoreMovieSelector, getAuthSelector} from './../../redux/selectors.js';
import {FilmPropType} from './../../utils/types.js';
import {addUserFilm} from './../../redux/filmsReducer.js';

class MoviePageContainer extends React.PureComponent {

  onAddBtnClick() {
    const {id, isFavorite: status} = this.props.film;
    this.props.addUserFilm(id, +!status);
  }

  render() {
    return (
      <MoviePage
        film={this.props.film}
        moreFilms={this.props.moreFilms}
        authStatus={this.props.authStatus}
        onAddBtnClick={this.onAddBtnClick.bind(this)}
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

const mapDispatchToProps = {
  addUserFilm
};

MoviePageContainer.propTypes = {
  film: FilmPropType,
  moreFilms: PropTypes.arrayOf(FilmPropType),
  authStatus: PropTypes.number.isRequired,
  addUserFilm: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageContainer);


