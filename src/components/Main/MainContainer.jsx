import React from 'react';
import PropTypes from 'prop-types';
import Main from './Main.jsx';
import {setCountShowFilms, getPromoFilm} from './../../redux/filmsReducer.js';
import {
  getShownFilmsSelector,
  isShowButtonMoreSelector,
  getCountShownFilms,
  getPromoFilmSelector,
  getAuthSelector
} from './../../redux/selectors.js';
import {connect} from 'react-redux';
import {COUNT_SHOWN_FILMS} from './../../utils/const.js';
import {FilmPropType} from './../../utils/types.js';

class MainContainer extends React.PureComponent {

  onButtonMoreClick() {
    const count = this.props.countShownFilms + COUNT_SHOWN_FILMS;
    this.props.setCountShowFilms(count);
  }

  componentDidMount() {
    this.props.getPromoFilm();
  }

  render() {
    return (
      <Main
        films={this.props.films}
        isShowButtonMore={this.props.isShowButtonMore}
        onButtonMoreClick={this.onButtonMoreClick.bind(this)}
        promoFilm={this.props.promoFilm}
        authStatus={this.props.authStatus}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    films: getShownFilmsSelector(state),
    isShowButtonMore: isShowButtonMoreSelector(state),
    countShownFilms: getCountShownFilms(state),
    promoFilm: getPromoFilmSelector(state),
    authStatus: getAuthSelector(state)
  };
};

const mapDispatchToProps = {
  setCountShowFilms,
  getPromoFilm
};

MainContainer.propTypes = {
  films: PropTypes.arrayOf(FilmPropType).isRequired,
  isShowButtonMore: PropTypes.bool.isRequired,
  setCountShowFilms: PropTypes.func.isRequired,
  countShownFilms: PropTypes.number.isRequired,
  getPromoFilm: PropTypes.func.isRequired,
  promoFilm: FilmPropType,
  authStatus: PropTypes.number.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

