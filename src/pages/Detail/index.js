import Stars from 'react-native-stars';
import React, { useEffect, useState } from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/core';
import { ActivityIndicator, ScrollView, Modal } from 'react-native';

import { 
  Container,
  Header,
  HeaderButton,
  Banner,
  ButtonLink, 
  Title,
  ContentArea, 
  Rate,
  Description, 
  ListGenres,
  Center,
  BorderSpacer
} from './styles';

import Genre from '../../components/Genre';
import Render from '../../components/Render';
import ModalLink from '../../components/ModalLink';

import { Client, ImageUrl } from '../../services/api';
import { deleteMovie, hasSavedMovie, saveMovie } from '../../utils/storage';

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenLink, setIsOpenLink] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function getMovie(){
      const response = await Client.get('/movie/' + route.params?.id)
        .catch((err) => {
          console.log('Erro ao obter detalhes do filme: ' + err.message);
        });
      
      if (isActive){
        setMovie(response?.data);
        setIsFavorited(await hasSavedMovie(response?.data));
        setIsLoading(false);
      }
    }

    if (isActive){
      getMovie();
    }

    return () => {
      isActive = false;
    }
  }, []);

  async function handleFavoriteMovie(movie){
    if (!isFavorited){
      await saveMovie(movie);
      setIsFavorited(true)
    } else {
      await deleteMovie(movie);
      setIsFavorited(false)
    }
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

      <Header>

        <HeaderButton activeOpacity={0.7} onPress={ () => navigation.goBack() }>
          <Feather 
            name="arrow-left"
            size={28}
            color="#FFF"
          />
        </HeaderButton>

        <HeaderButton activeOpacity={0.7} onPress={ () => handleFavoriteMovie(movie) }>
          <Render if={isFavorited}>
            <Ionicons 
              name="bookmark"
              size={28}
              color="#FFF"
            />
          </Render>
          <Render if={!isFavorited}>
            <Ionicons 
              name="bookmark-outline"
              size={28}
              color="#FFF"
            />
          </Render>
        </HeaderButton>

      </Header>

      <Banner 
        resizeMethod="resize" 
        source={{ uri: ImageUrl + movie.poster_path }}
      />

      <Render if={!!movie?.homepage}>
        <ButtonLink onPress={ () => setIsOpenLink(true) }>
          <Feather 
            name="link" 
            size={24}
            color="#FFF"
          />
        </ButtonLink>
      </Render>

      <Title numberOfLines={2}>{movie.title}</Title>

      <ContentArea>
        <Stars 
          count={movie.vote_average}
          starSize={20} 
          half={true}
          fullStar={ <Ionicons name="md-star" size={24} color="#E7A74E" /> }
          emptyStar={ <Ionicons name="md-star" size={24} color="#E7A74E" /> }
          halfStar={ <Ionicons name="md-star" size={24} color="#E7A74E" /> }
          disabled={true}
        />
        <Rate>{movie.vote_average}/10</Rate>
      </ContentArea>

      <ListGenres 
        data={movie?.genres}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) => <Genre name={item.name} /> }
      />

      <ScrollView>
        <Title>Sinopse</Title>
        <BorderSpacer />
        <Render if={!!movie?.overview}>
          <Description>
            {movie?.overview}
          </Description>
        </Render>
        <Render if={!movie?.overview}>
          <Description>
            Não há nenhuma sinopse para este filme.
          </Description>
        </Render>
      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={isOpenLink}>
        <ModalLink 
          link={movie?.homepage}
          title={movie?.title}
          closeModal={ () => setIsOpenLink(false) }
        />
      </Modal>

    </Container>
  )
}

export default Detail;
