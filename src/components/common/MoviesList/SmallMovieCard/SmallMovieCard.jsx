import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const SmallMovieCard = ({name, img, onCardActive, activeCard, previewVideo, id}) => {

  let timer;

  const setTimer = () => {
    timer = setTimeout(() => {
      onCardActive(id);
    }, 1000);
  };

  const clearTimer = () => {
    onCardActive(-1);
    clearTimeout(timer);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={setTimer}
      onMouseLeave={clearTimer}
    >
      <div className="small-movie-card__image">
        {activeCard === id
          ? <video src={previewVideo} autoPlay width="280" height="175" muted/>
          : <img src={img} alt={name} width="280" height="175" />
        }
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/movie/${id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onCardActive: PropTypes.func.isRequired,
  activeCard: PropTypes.number.isRequired,
  previewVideo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default SmallMovieCard;
