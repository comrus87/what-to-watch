import React from 'react';
import PropTypes from 'prop-types';
import Header from './../common/Header/Header.jsx';
import Footer from './../common/Footer/Footer.jsx';
import TabsContainer from './Tabs/TabsContainer.jsx';
import MoviesList from './../common/MoviesList/MoviesList.jsx';
import {FilmPropType} from './../../utils/types.js';
import {Link} from 'react-router-dom';

const MoviePage = ({film, moreFilms}) => {

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">

                <Link to={`/video/${film.id}`} className="btn btn--play movie-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>

                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <TabsContainer film={film} />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {moreFilms.length !== 0 ? <MoviesList films={moreFilms} /> : <span>There are no films of this genre, sorry :)</span>}

        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  film: FilmPropType,
  moreFilms: PropTypes.arrayOf(FilmPropType).isRequired
};

export default MoviePage;
