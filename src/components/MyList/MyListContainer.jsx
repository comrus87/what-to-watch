import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MyList from './MyList.jsx';
import {loadUserFilms} from './../../redux/filmsReducer.js';
import {getUserFilms} from './../../redux/selectors.js';
import {FilmPropType} from './../../utils/types.js';

class MyListContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadUserFilms();
  }

  render() {
    return <MyList films={this.props.films} />;
  }
}

const mapStateToProps = (state) => {
  return {
    films: getUserFilms(state)
  };
};

const mapDispatchToProps = {
  loadUserFilms
};

MyListContainer.propTypes = {
  films: PropTypes.arrayOf(FilmPropType).isRequired,
  loadUserFilms: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MyListContainer);
