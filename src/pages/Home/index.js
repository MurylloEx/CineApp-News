import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator, ScrollView } from 'react-native';

import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';

import { Client, ImageUrl } from '../../services/api';
import { getListMovies, getRandomMovie } from '../../utils/movies';

import { 
  Container,
  SearchContainer,
  SearchButton,
  Input,
  Title,
  BannerButton,
  Banner, 
  SliderMovie,
  Center,
  BorderSpacer
} from './styles';


const Home = () => {
  const navigation = useNavigation();

  const [nowMovies, setNowMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [bannerMovie, setBannerMovie] = useState({});
  const [input, setInput] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const abortController = new AbortController();

    async function getMovies(){
      const [nowData, popularData, topData] = await Promise.all([
        Client.get('/movie/now_playing'),
        Client.get('/movie/popular'),
        Client.get('/movie/top_rated')
      ]);

      if (isActive){
        setNowMovies(getListMovies(15, nowData?.data?.results));
        setPopularMovies(getListMovies(15, popularData?.data?.results));
        setTopMovies(getListMovies(10, topData?.data?.results));
        setBannerMovie(getRandomMovie(nowData?.data?.results));
        setIsLoading(false);
      }

    }

    getMovies();

    return () => {
      isActive = false;
      abortController.abort();
    }

  }, []);

  function navigateDetailsPage(item){
    navigation.navigate('Detail', { id: item.id });
  }

  function handleSearchMovie(searchInput){
    if (!searchInput)
      return;
    navigation.navigate('Results', { searchInput });
    setInput('');
  }

  if (isLoading){
    return (
      <Container>
        <Center>
          <ActivityIndicator size="large" color="#FFF" />
        </Center>
      </Container>
    )
  }

  return (
    <Container>
      <Header title="CineApp News"/>

      <SearchContainer>

        <Input 
          placeholder="Pesquisar filme..." 
          placeholderTextColor="#DDD" 
          onChangeText={ (text) => setInput(text) }
        />
        <SearchButton onPress={ () => handleSearchMovie(input) }>
          <Feather name="search" size={30} color="#FFF"/>
        </SearchButton>
        
      </SearchContainer>

      <ScrollView>
        <Title>Em cartaz</Title>
        <BorderSpacer />

        <BannerButton activeOpacity={0.7} onPress={ () => navigateDetailsPage(bannerMovie) }>
          <Banner 
            resizeMethod="resize"
            source={{ uri: ImageUrl + bannerMovie?.poster_path }}
          />
        </BannerButton>

        <SliderMovie 
          horizontal={true}
          data={nowMovies}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ (item) => String(item.id) }
          renderItem={ ({ item }) => (
            <SliderItem 
              data={item} 
              navigatePage={ (movie) => navigateDetailsPage(movie) }
            />
          ) }
        />

        <Title>Populares</Title>
        <BorderSpacer />

        <SliderMovie 
          horizontal={true}
          data={popularMovies}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ (item) => String(item.id) }
          renderItem={ ({ item }) => (
            <SliderItem 
              data={item} 
              navigatePage={ (movie) => navigateDetailsPage(movie) }
            />
          ) }
        />

        <Title>Mais votados</Title>
        <BorderSpacer />

        <SliderMovie 
          horizontal={true}
          data={topMovies}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ (item) => String(item.id) }
          renderItem={ ({ item }) => (
            <SliderItem 
              data={item} 
              navigatePage={ (movie) => navigateDetailsPage(movie) }
            />
          ) }
        />

      </ScrollView>

    </Container>
  )
}

export default Home;