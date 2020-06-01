import {getGenres, getFilterFilms} from './../utils/utils.js';
import {createSelector} from 'reselect';

export const getFilmsSelector = (state) => state.films.films;
export const getCurrentGenreSelector = (state) => state.films.currentGenre;
export const getCountShownFilms = (state) => state.films.countShownFilms;
export const getCurrentMovieId = (state) => state.films.currentMovieId;
export const getCommentsSelector = (state) => state.films.comments;
export const getPromoFilmSelector = (state) => state.films.promoFilm;
export const getAuthSelector = (state) => state.user.authStatus;
export const getUserSelector = (state) => state.user.user;

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

// Получаем выбранный фильм
export const getMovieIdSelector = createSelector(
    getFilmsSelector,
    getCurrentMovieId,
    (films, currentId) => films.find((f) => f.id === currentId)
);

// Получаем список похожих по жанру фильмов
export const getMoreMovieSelector = createSelector(
    getFilmsSelector,
    getMovieIdSelector,
    (films, currentFilm) => films.filter((f) => f.genre === currentFilm.genre && f !== currentFilm).splice(0, 4)
);
