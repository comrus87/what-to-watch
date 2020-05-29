import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import store from './redux/store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from './history';


ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>, document.getElementById(`root`));
