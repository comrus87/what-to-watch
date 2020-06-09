import * as axios from 'axios';
import {REQUEST_STATUS} from './../utils/const.js';
import history from './../history.js';

const instance = axios.create({
  baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
  timeout: 5000,
  withCredentials: true
});

const onSuccess = (response) => {
  return response;
};

const onError = (err) => {
  if (err.response.status === REQUEST_STATUS.UNAUTHORIZED) {
    history.push(`/auth`);
  }
  throw err;
};

instance.interceptors.response.use(onSuccess, onError);

export const filmsApi = {
  getFilms() {
    return instance.get(`/films`).then((response) => response.data);
  },

  getPromoFilm() {
    return instance.get(`/films/promo`).then((response) => response.data);
  },

  getComments(id) {
    return instance.get(`/comments/${id}`).then((response) => response.data);
  },

  postComments(id, comment) {
    return instance.post(`/comments/${id}`, comment).then((response) => response.data);
  },

  loadUserFilms() {
    return instance.get(`/favorite`).then((response) => response.data);
  },

  addUserFilm(id, status) {
    return instance.post(`/favorite/${id}/${status}`).then((response) => response.data);
  }
};


export const userApi = {
  checkUser() {
    return instance.get(`/login`).then((response) => response.data);
  },

  login(email, password) {
    return instance.post(`/login`, {email, password}).then((response) => response.data);
  }
};
