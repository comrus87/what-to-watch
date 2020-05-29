import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import GenresList from './GenresList.jsx';
import {setCurrentGenre, setCountShowFilms} from './../../../redux/filmsReducer.js';
import {getCurrentGenreSelector, getGenresSelector} from './../../../redux/selectors.js';
import {COUNT_SHOWN_FILMS} from './../../../utils/const.js';

class GenresListContainer extends React.PureComponent {

  onGenreClick(evt, genre) {
    evt.preventDefault();
    this.props.setCurrentGenre(genre);
    this.props.setCountShowFilms(COUNT_SHOWN_FILMS);
  }

  render() {
    return (
      <GenresList
        genres={this.props.genres}
        onGenreClick={this.onGenreClick.bind(this)}
        currentGenre={this.props.currentGenre}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentGenre: getCurrentGenreSelector(state),
    genres: getGenresSelector(state)
  };
};

const mapDispatchToProps = {
  setCurrentGenre,
  setCountShowFilms
};

GenresListContainer.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGenre: PropTypes.string.isRequired,
  setCurrentGenre: PropTypes.func.isRequired,
  setCountShowFilms: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresListContainer);
