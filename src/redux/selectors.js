import {getGenres, getFilterFilms} from './../utils/utils.js';
import {createSelector} from 'reselect';

export const getFilmsSelector = (state) => state.films.films;
export const getCurrentGenreSelector = (state) => state.films.currentGenre;
export const getCountShownFilms = (state) => state.films.countShownFilms;

// Получаем список жанров
export const getGenresSelector = createSelector(
    getFilmsSelector,
    (films) => getGenres(films)
);

// Получаем фильмы по жанрам
export const getFilterFilmsSelector = createSelector(
    getFilmsSelector,
    getCurrentGenreSelector,
    (films, currentGenre) => getFilterFilms(films, currentGenre)
);

// Определяем показывать кнопку еще или нет
export const isShowButtonMoreSelector = createSelector(
    getFilterFilmsSelector,
    getCountShownFilms,
    (films, countShowFilms) => countShowFilms < films.length
);

// Получаем список фильмов которые нужно показать
export const getShownFilmsSelector = createSelector(
    getFilterFilmsSelector,
    getCountShownFilms,
    (films, countShownFilms) => films.slice(0, countShownFilms)
);
