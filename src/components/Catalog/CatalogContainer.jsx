import React from 'react';
import Catalog from './Catalog.jsx';
import {getFilms, setCurrentGenre} from './../../redux/filmsReducer.js';
import {getFilterFilmsSelector, getCurrentGenreSelector, getGenresSelector} from './../../redux/selectors.js';
import {connect} from 'react-redux';

class CatalogContainer extends React.PureComponent {

  onGenreClick(evt, genre) {
    evt.preventDefault();
    this.props.setCurrentGenre(genre);
  }

  componentDidMount() {
    this.props.getFilms();
  }

  render() {
    return (
      <Catalog
        films={this.props.films}
        genres={this.props.genres}
        currentGenre={this.props.currentGenre}
        onGenreClick={this.onGenreClick.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    films: getFilterFilmsSelector(state),
    currentGenre: getCurrentGenreSelector(state),
    genres: getGenresSelector(state)
  };
};

const mapDispatchToProps = {
  getFilms,
  setCurrentGenre
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);

