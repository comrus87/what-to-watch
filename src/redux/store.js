import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import filmsReducer from './filmsReducer';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers ({
  films: filmsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
