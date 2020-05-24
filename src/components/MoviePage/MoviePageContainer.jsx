import React from 'react';
import MoviePage from './MoviePage.jsx';


class MoviePageContainer extends React.PureComponent {
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
      <MoviePage
        onTabNavClick={this.onTabNavClick.bind(this)}
        tabs={this.state.tabs}
        activeTab={this.state.activeTab}
      />
    );
  }
}

export default MoviePageContainer;
