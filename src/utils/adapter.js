import {camelCase} from 'lodash';

export const adapterFilms = (data) => {
  const obj = data.map((film) => {
    for (let key in film) {
      if (key.includes(`_`)) {
        film[camelCase(key)] = film[key];
        delete film[key];
      }
    }
    return film;
  });

  return obj;
};
