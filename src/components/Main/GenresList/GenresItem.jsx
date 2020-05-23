import React from 'react';
import PropTypes from 'prop-types';

const GenresItem = ({genre, onGenreClick, currentGenre}) => {
  return (
    <li className={`catalog__genres-item ${(currentGenre === genre) ? `catalog__genres-item--active` : ``}`}>
      <a
        href="#"
        className="catalog__genres-link"
        onClick={(evt) => onGenreClick(evt, genre)}>{genre}
      </a>
    </li>
  );
};

GenresItem.propTypes = {
  genre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired
};

export default GenresItem;
