import React from 'react';
import PropTypes from 'prop-types';

const MoreButton = ({onButtonMoreClick}) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onButtonMoreClick}
      >Show more</button>
    </div>
  );
};

MoreButton.propTypes = {
  onButtonMoreClick: PropTypes.func.isRequired
};

export default MoreButton;
