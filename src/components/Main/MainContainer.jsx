import React from 'react';
import PropTypes from 'prop-types';
import Main from './Main.jsx';
import {setCurrentGenre, setCountShowFilms, getPromoFilm} from './../../redux/filmsReducer.js';
import {
  getShownFilmsSelector,
  getCurrentGenreSelector,
  getGenresSelector,
  isShowButtonMoreSelector,
  getCountShownFilms,
  getPromoFilmSelector
} from './../../redux/selectors.js';
import {connect} from 'react-redux';
import {COUNT_SHOWN_FILMS} from './../../utils/const.js';
import {FilmPropType} from './../../utils/types.js';

class MainContainer extends React.PureComponent {

  onGenreClick(evt, genre) {
    evt.preventDefault();
    this.props.setCurrentGenre(genre);
    this.props.setCountShowFilms(COUNT_SHOWN_FILMS);
  }

  onButtonMoreClick() {
    const count = this.props.countShownFilms + COUNT_SHOWN_FILMS;
    this.props.setCountShowFilms(count);
  }

  componentDidMount() {
    this.props.getPromoFilm();
  }

  render() {
    return (
      <Main
        films={this.props.films}
        genres={this.props.genres}
        currentGenre={this.props.currentGenre}
        onGenreClick={this.onGenreClick.bind(this)}
        isShowButtonMore={this.props.isShowButtonMore}
        onButtonMoreClick={this.onButtonMoreClick.bind(this)}
        promoFilm={this.props.promoFilm}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    films: getShownFilmsSelector(state),
    currentGenre: getCurrentGenreSelector(state),
    genres: getGenresSelector(state),
    isShowButtonMore: isShowButtonMoreSelector(state),
    countShownFilms: getCountShownFilms(state),
    promoFilm: getPromoFilmSelector(state)
  };
};

const mapDispatchToProps = {
  setCurrentGenre,
  setCountShowFilms,
  getPromoFilm
};

MainContainer.propTypes = {
  films: PropTypes.arrayOf(FilmPropType),
  currentGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentGenre: PropTypes.func.isRequired,
  isShowButtonMore: PropTypes.bool.isRequired,
  setCountShowFilms: PropTypes.func.isRequired,
  countShownFilms: PropTypes.number.isRequired,
  getPromoFilm: PropTypes.func.isRequired,
  promoFilm: FilmPropType
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

