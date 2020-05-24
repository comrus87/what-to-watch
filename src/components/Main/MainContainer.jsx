import React from 'react';
import PropTypes from 'prop-types';
import Main from './Main.jsx';
import {getFilms, setCurrentGenre, setCountShowFilms} from './../../redux/filmsReducer.js';
import {getShownFilmsSelector, getCurrentGenreSelector, getGenresSelector, isShowButtonMoreSelector, getCountShownFilms} from './../../redux/selectors.js';
import {connect} from 'react-redux';
import {COUNT_SHOWN_FILMS} from './../../utils/const.js';

class MainContainer extends React.PureComponent {

  onGenreClick(evt, genre) {
    evt.preventDefault();
    this.props.setCurrentGenre(genre);
    this.props.setCountShowFilms(COUNT_SHOWN_FILMS);
  }

  componentDidMount() {
    this.props.getFilms();
  }

  onButtonMoreClick() {
    const count = this.props.countShownFilms + COUNT_SHOWN_FILMS;
    this.props.setCountShowFilms(count);
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
    countShownFilms: getCountShownFilms(state)
  };
};

const mapDispatchToProps = {
  getFilms,
  setCurrentGenre,
  setCountShowFilms
};

MainContainer.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired),
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired
  })),
  currentGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentGenre: PropTypes.func.isRequired,
  getFilms: PropTypes.func.isRequired,
  isShowButtonMore: PropTypes.bool.isRequired,
  setCountShowFilms: PropTypes.func.isRequired,
  countShownFilms: PropTypes.number.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

