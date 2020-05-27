import React from 'react';
import PropTypes from 'prop-types';
import {getFilmRatingLevel} from './../../../../utils/utils.js';


const Overview = ({rating, scoresCount, description, director, starring}) => {

  const MAX_ACTORS = 3;

  function mapToParagraph(text) {
    return text.split(`\n`).map((p, i) => (<p key={i}>{p}</p>));
  }

  function getStarrings(arr) {
    if (arr.length < MAX_ACTORS) {
      return arr.join(`, `);
    }
    return arr.slice(0, MAX_ACTORS).join(`, `) + ` and other`;
  }

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getFilmRatingLevel(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {mapToParagraph(description)}
        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {getStarrings(starring)}</strong></p>
      </div>
    </React.Fragment>
  );
};

Overview.propTypes = {
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default Overview;
