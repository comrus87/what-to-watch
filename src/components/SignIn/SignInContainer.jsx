import React from 'react';
import SignIn from './SignIn.jsx';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from './../../redux/userReducer.js';
import {getAuthSelector} from './../../redux/selectors.js';
import {REQUEST_STATUS} from './../../utils/const.js';
import history from './../../history.js';

class SignInContainer extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
      isEmailValid: true
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(evt) {
    const {type, value} = evt.target;
    if (type === `email`) {
      this.setState({isEmailValid: evt.target.validity.valid});
    }
    this.setState({[type]: value});
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  componentDidUpdate() {
    if (this.props.authStatus === REQUEST_STATUS.OK) {
      history.goBack();
    }
  }

  render() {
    return <SignIn
      handleInput={this.handleInput}
      handleSubmit={this.handleSubmit}
      isEmailValid={this.state.isEmailValid}
      authStatus={this.props.authStatus}
    />;
  }
}

const mapStateToProps = (state) => {
  return {
    authStatus: getAuthSelector(state)
  };
};

const mapDispatchToProps = {
  login
};

SignInContainer.propTypes = {
  authStatus: PropTypes.number.isRequired,
  login: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
