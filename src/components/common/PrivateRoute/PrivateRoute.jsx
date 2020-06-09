import React from 'react';
import PropTypes from 'prop-types';
import {REQUEST_STATUS} from './../../../utils/const.js';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthSelector} from './../../../redux/selectors.js';


const PrivateRoute = ({exact, path, render, authStatus}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(match) => {
        return (
          authStatus === REQUEST_STATUS.OK
            ? render(match)
            : <Redirect to='/auth' />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authStatus: getAuthSelector(state)
});


PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  authStatus: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(PrivateRoute);
