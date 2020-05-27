import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from './SmallMovieCard/SmallMovieCard.jsx';
import withActiveItem from './../../../hocs/withActiveItem.jsx';

const MoviesList = ({films, onCardActive, activeCard}) => {

  return (
    <div className="catalog__movies-list">
      {films.map((f) =>
        <SmallMovieCard
          key={f.id}
          name={f.name}
          img={f.previewImage}
          previewVideo={f.previewVideoLink}
          onCardActive={onCardActive}
          activeCard={activeCard}
          id={f.id}
        />
      )}
    </div>
  );
};


MoviesList.propTypes = {
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
  onCardActive: PropTypes.func.isRequired,
  activeCard: PropTypes.number.isRequired
};

export default withActiveItem(MoviesList);
