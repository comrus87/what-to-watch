import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import filmsReducer from './filmsReducer';
import userReducer from './userReducer';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers ({
  films: filmsReducer,
  user: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
