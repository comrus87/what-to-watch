import React from 'react';
import PropTypes from "prop-types";
import Header from './../common/Header/Header.jsx';
import Footer from './../common/Footer/Footer.jsx';
import {FilmPropType} from './../../utils/types.js';
import MoviesList from './../common/MoviesList/MoviesList.jsx';


const MyList = ({films}) => {

  return (
    <div className="user-page">
      <Header clsHeader={`user-page__head`} isUserBlock={true}>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList films={films} />

      </section>

      <Footer />
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(FilmPropType).isRequired
};

export default React.memo(MyList);

