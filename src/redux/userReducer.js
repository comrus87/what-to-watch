import {userApi} from './../api/api.js';
import {adapterFilm} from './../utils/adapter.js';
import {REQUEST_STATUS} from './../utils/const.js';


const initialState = {
  authStatus: 0,
  user: {}
};

const SET_AUTH_STATUS = `user/SET_AUTH_STATUS`;
const SET_USER = `user/SET_USER`;


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_STATUS:
      return Object.assign({}, state, {authStatus: action.authStatus});

    case SET_USER:
      return Object.assign({}, state, {user: action.user});

    default: return state;
  }
};

export const setAuthStatus = (authStatus) => ({type: SET_AUTH_STATUS, authStatus});
export const setUser = (user) => ({type: SET_USER, user});

export const login = (email, password) => (dispatch) => {
  let data = userApi.login(email, password);
  data.then((userData) => {
    dispatch(setAuthStatus(REQUEST_STATUS.OK));
    const user = adapterFilm(userData);
    dispatch(setUser(user));
  }).catch((err) => {
    if (err.response.status === REQUEST_STATUS.BAD_REQUEST) {
      dispatch(setAuthStatus(REQUEST_STATUS.BAD_REQUEST));
    }
    throw err;
  });
};

export default userReducer;
