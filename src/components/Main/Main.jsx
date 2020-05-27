import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard/MovieCard.jsx';
import MoviesList from './../common/MoviesList/MoviesList.jsx';
import GenresList from './GenresList/GenresList.jsx';
import MoreButton from './MoreButton/MoreButton.jsx';
import Footer from './../common/Footer/Footer.jsx';


const Main = ({films, genres, onGenreClick, currentGenre, isShowButtonMore, onButtonMoreClick}) => {

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
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  isShowButtonMore: PropTypes.bool.isRequired,
  onButtonMoreClick: PropTypes.func.isRequired
};

export default Main;
