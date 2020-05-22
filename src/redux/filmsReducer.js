import {filmsApi} from './../api/api.js';
import {adapterFilms} from './../utils/adapter.js';
import {DEFAULT_GENRE} from './../utils/utils.js';

const SET_FILMS = `films/SET_FILMS`;
const SET_CURRENT_GENRE = `films/SET_CURRENT_GENRE`;

const initialState = {
  films: [],
  currentGenre: DEFAULT_GENRE
};


const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS:
      return Object.assign({}, state, {films: action.films});

    case SET_CURRENT_GENRE:
      return Object.assign({}, state, {currentGenre: action.currentGenre});

    default: return state;
  }
};

export const setFilms = (films) => ({type: SET_FILMS, films});
export const setCurrentGenre = (currentGenre) => ({type: SET_CURRENT_GENRE, currentGenre});

export const getFilms = () => (dispatch) => {
  let data = filmsApi.getFilms();
  data.then((dataFilms) => {
    const films = adapterFilms(dataFilms);
    dispatch(setFilms(films));
  });
};

export default filmsReducer;
