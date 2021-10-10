import AsyncStorage from "@react-native-async-storage/async-storage";

const SavedMoviesKey = '@saved-movies';

export async function getSavedMovies(){
  return JSON.parse(await AsyncStorage.getItem(SavedMoviesKey)) || [];
}

export async function hasSavedMovie(movie){
  return (await getSavedMovies()).find(item => item.id == movie.id);
}

export async function saveMovie(movie){
  if (await hasSavedMovie(movie))
    return;

  let storedMovies = await getSavedMovies();
  storedMovies.push(movie);

  await AsyncStorage.setItem(SavedMoviesKey, JSON.stringify(storedMovies));
}

export async function deleteMovie(movie){
  let filteredMovies = (await getSavedMovies()).filter(m => m.id != movie.id);
  await AsyncStorage.setItem(SavedMoviesKey, JSON.stringify(filteredMovies));
}
