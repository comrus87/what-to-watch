import {getGenres, getFilterFilms} from './../utils/utils.js';
import {createSelector} from 'reselect';

export const getFilmsSelector = (state) => state.films.films;
export const getCurrentGenreSelector = (state) => state.films.currentGenre;

export const getGenresSelector = createSelector(
    getFilmsSelector,
    (films) => getGenres(films)
);

export const getFilterFilmsSelector = createSelector(
    getFilmsSelector,
    getCurrentGenreSelector,
    (films, currentGenre) => getFilterFilms(films, currentGenre)
);
