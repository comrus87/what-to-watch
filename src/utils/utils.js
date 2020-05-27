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

// Возвращает оценку в зависимости от рейтинга
export const getFilmRatingLevel = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  } else if (rating >= 3 && rating < 5) {
    return `Normal`;
  } else if (rating >= 5 && rating < 8) {
    return `Good`;
  } else if (rating >= 8 && rating < 10) {
    return `Very good`;
  } else if (rating === 10) {
    return `Awesome`;
  }
  return null;
};


// Форматирует время
export const formatTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  if (hours < 1) {
    return `${minutes} m`;
  }

  return `${hours} h ${minutes} m`;
};
