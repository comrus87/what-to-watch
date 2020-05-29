import React from 'react';
import PropTypes from 'prop-types';
import GenresItem from './GenresItem/GenresItem.jsx';

const GenresList = ({genres, onGenreClick, currentGenre}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((item, i) => {
        return <GenresItem key={item + i}
          genre={item}
          onGenreClick={onGenreClick}
          currentGenre={currentGenre}
        />;
      })}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired
};

export default GenresList;
