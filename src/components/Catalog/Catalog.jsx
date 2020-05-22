import React from 'react';
import MoviesList from './MoviesList/MoviesList.jsx';
import GenresList from './GenresList/GenresList.jsx';

const Catalog = ({films, genres, onGenreClick, currentGenre}) => {

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList
        genres={genres}
        onGenreClick={onGenreClick}
        currentGenre={currentGenre}
      />
      <MoviesList films={films} />

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

export default Catalog;
