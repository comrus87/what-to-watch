import React from 'react';

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

export default GenresItem;
