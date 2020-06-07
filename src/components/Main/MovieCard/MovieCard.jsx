import React from 'react';
import PropTypes from 'prop-types';
import Header from './../../common/Header/Header.jsx';
import {FilmPropType} from './../../../utils/types.js';
import {Link} from 'react-router-dom';
import {REQUEST_STATUS} from './../../../utils/const.js';

const MovieCard = ({promoFilm, authStatus}) => {

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoFilm.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoFilm.genre}</span>
              <span className="movie-card__year">{promoFilm.released}</span>
            </p>

            <div className="movie-card__buttons">

              <Link to={`/video/${promoFilm.id}`} className="btn btn--play movie-card__button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>

              {authStatus === REQUEST_STATUS.OK &&
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

MovieCard.propTypes = {
  promoFilm: FilmPropType,
  authStatus: PropTypes.number.isRequired
};

export default React.memo(MovieCard);
