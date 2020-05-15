import React from 'react';
import MovieCard from './MovieCard/MovieCard.jsx';
import Catalog from './Catalog/Catalog.jsx';
import Footer from './Footer/Footer.jsx';

const App = () => {

  return (
    <React.Fragment>
      <MovieCard />
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
