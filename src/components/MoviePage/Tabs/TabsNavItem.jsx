import React from 'react';
import PropTypes from 'prop-types';

const TabsNavItem = ({tab, activeTab, onTabNavClick}) => {
  return (
    <li
      className={`movie-nav__item ${(activeTab === tab) ? `movie-nav__item--active` : ``}`}
      onClick={(evt) => onTabNavClick(evt, tab)}
    >
      <a href="#" className="movie-nav__link">{tab}</a>
    </li>
  );
};

TabsNavItem.propTypes = {
  tab: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabNavClick: PropTypes.func.isRequired
};

export default TabsNavItem;
