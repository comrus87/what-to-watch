import React from 'react';

const Logo = ({cls}) => {
  return (

    <div className="logo">
      <a className={`logo__link ${cls || ``}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>

  );
};

export default Logo;

