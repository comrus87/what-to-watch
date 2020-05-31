import React from 'react';
import PropTypes from 'prop-types';
import Logo from './../Logo/Logo.jsx';
import {connect} from 'react-redux';
import {getAuthSelector, getUserSelector} from './../../../redux/selectors.js';
import {Link} from 'react-router-dom';

const Header = ({isAuth, user}) => {

  return (

    <header className="page-header movie-card__head">
      <Logo />
      <div className="user-block">
        {isAuth ?
          <div className="user-block__avatar">
            <img src={`https://htmlacademy-react-2.appspot.com` + user.avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
          : <Link to={`/auth`} className="user-block__link">Sign in</Link>
        }

      </div>
    </header>

  );
};

const mapStateToProps = (state) => ({
  isAuth: getAuthSelector(state),
  user: getUserSelector(state)
});

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  })
};

export default connect(mapStateToProps)(Header);
