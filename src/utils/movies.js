export function getListMovies(size, movies){
  if (Array.isArray(movies))
    return movies.slice(0, size);
  return [];
}

export function getRandomMovie(movies){
  return movies[Math.floor(Math.random() * movies.length)];
}