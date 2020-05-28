import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard/MovieCard.jsx';
import MoviesList from './../common/MoviesList/MoviesList.jsx';
import GenresList from './GenresList/GenresList.jsx';
import MoreButton from './MoreButton/MoreButton.jsx';
import Footer from './../common/Footer/Footer.jsx';
import {FilmPropType} from './../../utils/types.js';

const Main = ({films, genres, onGenreClick, currentGenre, isShowButtonMore, onButtonMoreClick, promoFilm}) => {
  console.log(promoFilm);

  return (
    <React.Fragment>
      <MovieCard />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genres={genres}
            onGenreClick={onGenreClick}
            currentGenre={currentGenre}
          />
          <MoviesList films={films} />
          {isShowButtonMore && <MoreButton onButtonMoreClick={onButtonMoreClick} />}
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  films: PropTypes.arrayOf(FilmPropType),
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  isShowButtonMore: PropTypes.bool.isRequired,
  onButtonMoreClick: PropTypes.func.isRequired,
  promoFilm: FilmPropType
};

export default Main;
