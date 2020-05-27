import React from 'react';
import PropTypes from 'prop-types';
import Overview from './Overview/Overview.jsx';
import Details from './Details/Details.jsx';
import ReviewsContainer from './Reviews/ReviewsContainer.jsx';
import TabsNavItem from './TabsNavItem.jsx';


const Tabs = ({film, tabs, activeTab, onTabNavClick}) => {

  let activeTabContent;

  switch (activeTab) {
    case `Overview`:
      activeTabContent = (
        <Overview
          rating={film.rating}
          scoresCount={film.scoresCount}
          description={film.description}
          director={film.director}
          starring={film.starring}
        />
      );
      break;
    case `Details`:
      activeTabContent = (
        <Details
          director={film.director}
          starring={film.starring}
          runTime={film.runTime}
          genre={film.genre}
          released={film.released}
        />
      );
      break;
    case `Reviews`:
      activeTabContent = (
        <ReviewsContainer id={film.id} />
      );
      break;
  }

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab, i) => {
            return <TabsNavItem
              key={tab + i}
              tab={tab}
              activeTab={activeTab}
              onTabNavClick={onTabNavClick}
            />;
          })}
        </ul>
      </nav>
      {activeTabContent}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  activeTab: PropTypes.string.isRequired,
  onTabNavClick: PropTypes.func.isRequired,
  film: PropTypes.shape({
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
  })
};

export default Tabs;
