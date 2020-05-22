import React from 'react';
import GenresItem from './GenresItem.jsx';

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

export default GenresList;
