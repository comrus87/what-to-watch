import {filmsApi} from './../api/api.js';
import {adapterFilms, adapterFilm} from './../utils/adapter.js';
import {DEFAULT_GENRE} from './../utils/utils.js';
import {COUNT_SHOWN_FILMS} from './../utils/const.js';
import history from './../history.js';

const SET_FILMS = `films/SET_FILMS`;
const SET_CURRENT_GENRE = `films/SET_CURRENT_GENRE`;
const SET_COUNT_SHOW = `films/SET_COUNT_SHOW`;
const SET_CURRENT_MOVIE_ID = `films/SET_CURRENT_MOVIE_ID`;
const SET_FILM_COMMENTS = `films/SET_FILM_COMMENTS`;
const SET_PROMO_FILM = `films/SET_PROMO_FILM`;
const SET_USERS_FILMS = `user/SET_USERS_FILMS`;
const MERGE_USER_FILM = `user/MERGE_USER_FILM`;

const initialState = {
  films: [],
  currentGenre: DEFAULT_GENRE,
  countShownFilms: COUNT_SHOWN_FILMS,
  currentMovieId: null,
  comments: [],
  promoFilm: {},
  userFilms: []
};


const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS:
      return Object.assign({}, state, {films: action.films});

    case SET_CURRENT_GENRE:
      return Object.assign({}, state, {currentGenre: action.currentGenre});

    case SET_COUNT_SHOW:
      return Object.assign({}, state, {countShownFilms: action.countShownFilms});

    case SET_CURRENT_MOVIE_ID:
      return Object.assign({}, state, {currentMovieId: action.currentMovieId});

    case SET_FILM_COMMENTS:
      return Object.assign({}, state, {comments: action.comments});

    case SET_PROMO_FILM:
      return Object.assign({}, state, {promoFilm: action.film});

    case SET_USERS_FILMS:
      return Object.assign({}, state, {userFilms: action.userFilms});

    case MERGE_USER_FILM:
      return Object.assign({}, state, {
        films: state.films.map((film) => film.id === action.film.id ? action.film : film
        )});

    default: return state;
  }
};

export const setFilms = (films) => ({type: SET_FILMS, films});
export const setCurrentGenre = (currentGenre) => ({type: SET_CURRENT_GENRE, currentGenre});
export const setCountShowFilms = (countShownFilms) => ({type: SET_COUNT_SHOW, countShownFilms});
export const setCurrentMovieId = (currentMovieId) => ({type: SET_CURRENT_MOVIE_ID, currentMovieId});
export const setComments = (comments) => ({type: SET_FILM_COMMENTS, comments});
export const setPromoFilm = (film) => ({type: SET_PROMO_FILM, film});
export const setUserFilms = (userFilms) => ({type: SET_USERS_FILMS, userFilms});
export const mergeUserFilm = (film) => ({type: MERGE_USER_FILM, film});


export const getFilms = () => (dispatch) => {
  let data = filmsApi.getFilms();
  data.then((dataFilms) => {
    const films = adapterFilms(dataFilms);
    dispatch(setFilms(films));
  });
};

export const getFilmComments = (id) => (dispatch) => {
  let data = filmsApi.getComments(id);
  data.then((comments) => {
    dispatch(setComments(comments));
  });
};

export const getPromoFilm = () => (dispatch) => {
  let data = filmsApi.getPromoFilm();
  data.then((dataFilm) => {
    const film = adapterFilm(dataFilm);
    dispatch(setPromoFilm(film));
  });
};

export const postComment = (id, comment) => () => {
  let data = filmsApi.postComments(id, comment);
  data.then(() => {
    history.push(`/movie/${id}`);
  });
};

export const loadUserFilms = () => (dispatch) => {
  let data = filmsApi.loadUserFilms();
  data.then((dataFilms) => {
    const films = adapterFilms(dataFilms);
    dispatch(setUserFilms(films));
  });
};

export const addUserFilm = (id, status) => (dispatch, getState) => {
  let data = filmsApi.addUserFilm(id, status);
  data.then((dataFilm) => {
    const userFilm = adapterFilm(dataFilm);
    dispatch(mergeUserFilm(userFilm));

    const promoFilm = getState().films.promoFilm;
    if (promoFilm.id === userFilm.id) {
      dispatch(setPromoFilm(userFilm));
    }
  });
};

export default filmsReducer;

