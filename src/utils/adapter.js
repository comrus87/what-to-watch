import {camelCase} from 'lodash';

export const adapterFilm = (film) => {
  for (let key in film) {
    if (key.includes(`_`)) {
      film[camelCase(key)] = film[key];
      delete film[key];
    }
  }
  return film;
};

export const adapterFilms = (data) => {
  const obj = data.map((film) => {
    return adapterFilm(film);
  });

  return obj;
};
