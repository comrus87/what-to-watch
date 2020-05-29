import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard/MovieCard.jsx';
import MoviesList from './../common/MoviesList/MoviesList.jsx';
import GenresListContainer from './GenresList/GenresListContainer.jsx';
import MoreButton from './MoreButton/MoreButton.jsx';
import Footer from './../common/Footer/Footer.jsx';
import {FilmPropType} from './../../utils/types.js';

const Main = ({films, isShowButtonMore, onButtonMoreClick, promoFilm}) => {

  return (
    <React.Fragment>
      <MovieCard promoFilm={promoFilm}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresListContainer />

          <MoviesList films={films} />
          {isShowButtonMore && <MoreButton onButtonMoreClick={onButtonMoreClick} />}
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  films: PropTypes.arrayOf(FilmPropType).isRequired,
  isShowButtonMore: PropTypes.bool.isRequired,
  onButtonMoreClick: PropTypes.func.isRequired,
  promoFilm: FilmPropType
};

export default Main;
