import React from 'react';
import PropTypes from 'prop-types';
import Logo from './../Logo/Logo.jsx';
import {connect} from 'react-redux';
import {getAuthSelector, getUserSelector} from './../../../redux/selectors.js';
import {Link} from 'react-router-dom';
import {AUTH_STATUS} from './../../../utils/const.js';

const Header = ({authStatus, user}) => {

  return (

    <header className="page-header movie-card__head">
      <Logo />
      <div className="user-block">
        {authStatus === AUTH_STATUS.OK ?
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
  authStatus: getAuthSelector(state),
  user: getUserSelector(state)
});

Header.propTypes = {
  authStatus: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  })
};

export default connect(mapStateToProps)(Header);
