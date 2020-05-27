import {filmsApi} from './../api/api.js';
import {adapterFilms} from './../utils/adapter.js';
import {DEFAULT_GENRE} from './../utils/utils.js';
import {COUNT_SHOWN_FILMS} from './../utils/const.js';

const SET_FILMS = `films/SET_FILMS`;
const SET_CURRENT_GENRE = `films/SET_CURRENT_GENRE`;
const SET_COUNT_SHOW = `films/SET_COUNT_SHOW`;
const SET_CURRENT_MOVIE_ID = `films/SET_CURRENT_MOVIE_ID`;
const SET_FILM_COMMENTS = `films/SET_FILM_COMMENTS`;

const initialState = {
  films: [],
  currentGenre: DEFAULT_GENRE,
  countShownFilms: COUNT_SHOWN_FILMS,
  currentMovieId: null,
  comments: []
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

    default: return state;
  }
};

export const setFilms = (films) => ({type: SET_FILMS, films});
export const setCurrentGenre = (currentGenre) => ({type: SET_CURRENT_GENRE, currentGenre});
export const setCountShowFilms = (countShownFilms) => ({type: SET_COUNT_SHOW, countShownFilms});
export const setCurrentMovieId = (currentMovieId) => ({type: SET_CURRENT_MOVIE_ID, currentMovieId});
export const setComments = (comments) => ({type: SET_FILM_COMMENTS, comments});


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


export default filmsReducer;

