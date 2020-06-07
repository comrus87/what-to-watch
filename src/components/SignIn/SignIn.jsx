import React from 'react';
import PropTypes from 'prop-types';
import Logo from './../common/Logo/Logo.jsx';
import Footer from './../common/Footer/Footer.jsx';
import {REQUEST_STATUS} from './../../utils/const.js';

const SignIn = ({handleInput, handleSubmit, isEmailValid, authStatus}) => {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {authStatus === REQUEST_STATUS.BAD_REQUEST ?
            <div className="sign-in__message">
              <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
            </div>
            : null
          }

          <div className="sign-in__fields">
            <div className={`sign-in__field ${isEmailValid ? `` : `sign-in__field--error`}`}>
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={handleInput}
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={handleInput}
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

SignIn.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isEmailValid: PropTypes.bool.isRequired,
  authStatus: PropTypes.number
};

export default React.memo(SignIn);
