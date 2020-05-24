import React from 'react';
import PropTypes from 'prop-types';
import Overview from './Overview/Overview.jsx';
import Details from './Details/Details.jsx';
import Reviews from './Reviews/Reviews.jsx';
import TabsNavItem from './TabsNavItem.jsx';


const Tabs = ({tabs, activeTab, onTabNavClick}) => {

  let activeTabContent;

  switch (activeTab) {
    case `Overview`:
      activeTabContent = (<Overview />);
      break;
    case `Details`:
      activeTabContent = (<Details />);
      break;
    case `Reviews`:
      activeTabContent = (<Reviews />);
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
  onTabNavClick: PropTypes.func.isRequired
};

export default Tabs;
