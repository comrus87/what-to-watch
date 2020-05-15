import React from 'react';
import PropTypes from 'prop-types';


const SmallMovieCard = ({name, img, onCardActive}) => {
  return (

    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onCardActive}
    >
      <div className="small-movie-card__image">
        <img src={img} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onCardActive: PropTypes.func.isRequired
};

export default SmallMovieCard;
