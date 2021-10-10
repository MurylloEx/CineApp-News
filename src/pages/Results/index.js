import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';

import ResultItem from '../../components/ResultItem';
import { Container, ListMovies, Center } from './styles';

import { Client } from '../../services/api';

const Results = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function getMovieResults(){
      const response = await Client.get('/search/movie', {
        params: {
          query: route?.params?.searchInput
        }
      });

      if (isActive){
        setMovie(response?.data?.results);
        setIsLoading(false);
      }
    }

    if (isActive){
      getMovieResults();
    }

    return () => {
      isActive = false;
    }
  }, []);

  if (isLoading){
    return (
      <Container>
        <Center>
          <ActivityIndicator size="large" color="#FFF" />
        </Center>
      </Container>
    )
  }

  function navigateDetailsPage(item){
    navigation.navigate('Detail', { id: item.id });
  }
  
  return (
    <Container>
      <ListMovies
        data={movie}
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) => <ResultItem data={item} detailMovie={ () => navigateDetailsPage(item) } /> }
      />
    </Container>
  )
}

export default Results;