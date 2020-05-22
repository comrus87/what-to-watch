export const DEFAULT_GENRE = `All genres`;

export const getGenres = (films) => {
  let genres = new Set();
  films.map((f) => {
    genres.add(f.genre);
  });

  genres = [...genres];
  genres.unshift(DEFAULT_GENRE);

  return genres;
};

export const getFilterFilms = (films, currentGenre) => {
  if (currentGenre === DEFAULT_GENRE) {
    return films;
  } else {
    return films.filter((f) => f.genre === currentGenre);
  }
};
