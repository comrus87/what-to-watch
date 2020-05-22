import * as axios from 'axios';

const instance = axios.create({
  baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
  timeout: 5000,
  withCredentials: true
});

export const filmsApi = {
  getFilms() {
    return instance.get(`/films`).then((response) => response.data);
  }
};
