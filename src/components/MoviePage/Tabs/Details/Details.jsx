import React from 'react';
import PropTypes from 'prop-types';
import {formatTime} from './../../../../utils/utils.js';

const Details = ({director, starring, runTime, genre, released}) => {

  function mapStarrings(arr) {
    return arr.map((item, i) => <React.Fragment key={i}>{item}  <br /> </React.Fragment>);
  }

  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {mapStarrings(starring)}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{formatTime(runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

Details.propTypes = {
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired),
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number
};

export default Details;
