import React from 'react';
import MovieCard from './MovieCard/MovieCard.jsx';
import CatalogContainer from './Catalog/CatalogContainer.jsx';
import Footer from './Footer/Footer.jsx';

const App = () => {

  return (
    <React.Fragment>
      <MovieCard />
      <div className="page-content">
        <CatalogContainer />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;

