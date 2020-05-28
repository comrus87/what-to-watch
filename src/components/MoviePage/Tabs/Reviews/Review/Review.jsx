import React from 'react';
import PropTypes from 'prop-types';
import {formatDate} from './../../../../../utils/utils.js';


const Review = ({comment, date, rating, user}) => {

  const getDataAtr = (str) => {
    return str.substring(0, 10);
  };

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={getDataAtr(date)}>{formatDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = {
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired
};

export default Review;
