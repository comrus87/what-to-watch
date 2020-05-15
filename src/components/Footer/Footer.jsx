import React from 'react';
import Logo from './../common/Logo/Logo.jsx';

const Footer = () => {
  return (
    <footer className="page-footer">
      <Logo cls={`logo__link--light`} />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
