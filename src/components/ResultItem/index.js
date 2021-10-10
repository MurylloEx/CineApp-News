import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Render from '../../components/Render';
import { 
  Container,
  Banner,
  BannerNotFound,
  Title,
  RateContainer,
  Rate 
} from './styles';

import { ResizedImageUrl } from '../../services/api';

const ResultItem = ({ data, detailMovie }) => {
  return (
    <Container activeOpacity={0.7} onPress={detailMovie} >
      <Render if={!!data?.poster_path}>
        <Banner 
          resizeMethod="resize"
          source={{ uri: ResizedImageUrl + data.poster_path }}
        />
      </Render>
      <Render if={!data?.poster_path}>
        <BannerNotFound>Sem imagem</BannerNotFound>
      </Render>

      <Title>{data?.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Rate>{data?.vote_average}/10</Rate>
      </RateContainer>
    </Container>
  )
}

export default ResultItem;