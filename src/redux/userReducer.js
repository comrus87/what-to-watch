import {userApi} from './../api/api.js';
import {adapterFilm} from './../utils/adapter.js';


const initialState = {
  isAuth: false,
  user: {}
};

const SET_AUTH = `user/SET_AUTH`;
const SET_USER = `user/SET_USER`;


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return Object.assign({}, state, {isAuth: action.isAuth});

    case SET_USER:
      return Object.assign({}, state, {user: action.user});

    default: return state;
  }
};

export const setAuth = (isAuth) => ({type: SET_AUTH, isAuth});
export const setUser = (user) => ({type: SET_USER, user});

export const login = (email, password) => (dispatch) => {
  let data = userApi.login(email, password);
  data.then((userData) => {
    dispatch(setAuth(true));
    const user = adapterFilm(userData);
    dispatch(setUser(user));
  });
};

export default userReducer;
