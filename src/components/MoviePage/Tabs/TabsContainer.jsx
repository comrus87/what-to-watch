import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs.jsx';

class TabsContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tabs: [`Overview`, `Details`, `Reviews`],
      activeTab: `Overview`
    };
  }

  onTabNavClick(evt, tab) {
    evt.preventDefault();
    this.setState({activeTab: tab});
  }

  render() {
    return (
      <Tabs
        onTabNavClick={this.onTabNavClick.bind(this)}
        tabs={this.state.tabs}
        activeTab={this.state.activeTab}
        film={this.props.film}
      />
    );
  }
}

TabsContainer.propTypes = {
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

export default TabsContainer;
