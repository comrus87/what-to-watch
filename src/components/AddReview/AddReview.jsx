import React from 'react';
import PropTypes from "prop-types";
import Header from './../common/Header/Header.jsx';
import {FilmPropType} from './../../utils/types.js';
import {Link} from 'react-router-dom';


const AddReview = ({film, onFormSubmit, onFieldChange}) => {
  const COUNT_STARS = 5;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/movie/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.posterImage} alt={film.name + ` poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={onFormSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {new Array(COUNT_STARS).fill(``).map((star, i) => {
                const index = i + 1;
                return <React.Fragment key={index}>
                  <input
                    className="rating__input"
                    id={`star-${index}`}
                    type="radio"
                    name="rating"
                    defaultValue={index}
                    onChange={onFieldChange}
                  />
                  <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
                </React.Fragment>;
              })}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="textReview"
              id="review-text"
              placeholder="Review text"
              onChange={onFieldChange}
              required
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  film: FilmPropType,
  onFormSubmit: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired
};

export default React.memo(AddReview);

