import { RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import Header from '../../components/Header';
import FavoriteItem from '../../components/FavoriteItem';

import { Container, ListMovies, MoviesNotFound } from './styles';
import { deleteMovie, getSavedMovies } from '../../utils/storage';

const Movies = () => {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function getFavoriteMovies(){
      const savedMovies = await getSavedMovies();

      if (isActive){
        setMovies(savedMovies);
      }
    }

    if (isActive){
      getFavoriteMovies();
    }

    return () => {
      isActive = false;
    }
  }, [updateTrigger]);

  function navigateDetailsPage(movie){
    navigation.navigate('Detail', { id: movie.id });
  }

  function deleteFavoriteMovie(movie){
    deleteMovie(movie).then(() => {
      setUpdateTrigger(!updateTrigger);
    });
  }

  function refreshPage(){
    setUpdateTrigger(!updateTrigger);
  }

  if (movies.length == 0){
    return (
      <Container>
        <Header title="Meus filmes"/>
        <MoviesNotFound>
          Parece que você não favoritou nenhum filme ainda!
        </MoviesNotFound>
      </Container>
    )
  }

  return (
    <Container>
      <Header title="Meus Filmes"/>

      <ListMovies 
        showsVerticalScrollIndicator={false}
        data={movies}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) => (
          <FavoriteItem 
            data={item} 
            navigateDetails={ () => navigateDetailsPage(item) } 
            deleteFavorite={ () => deleteFavoriteMovie(item) }
          />
        ) }
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refreshPage}
          />
        }
      />
    </Container>
  )
}

export default Movies;
