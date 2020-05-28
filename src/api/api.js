import * as axios from 'axios';

const instance = axios.create({
  baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
  timeout: 5000,
  withCredentials: true
});

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
    return instance.post(`/comments/${id}`, {comment}).then((response) => response.data);
  }
};
