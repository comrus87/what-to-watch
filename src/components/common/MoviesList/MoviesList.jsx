import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from './SmallMovieCard/SmallMovieCard.jsx';
import withActiveItem from './../../../hocs/withActiveItem.jsx';
import {FilmPropType} from './../../../utils/types.js';

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
  films: PropTypes.arrayOf(FilmPropType),
  onCardActive: PropTypes.func.isRequired,
  activeCard: PropTypes.number.isRequired
};

export default withActiveItem(MoviesList);
