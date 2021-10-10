import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { 
  Container, 
  BannerItem, 
  Title,
  RateContainer,
  Rate
} from './styles';

import { ImageUrl } from '../../services/api';

const SliderItem = ({ data, navigatePage }) => {
  return (
    <Container activeOpacity={0.7} onPress={ () => navigatePage(data) }>
      <BannerItem 
        source={{ uri: ImageUrl + data.poster_path }}
      />

      <Title numberOfLines={1}>{data.title}</Title>
      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Rate>{data.vote_average}/10</Rate>
      </RateContainer>
    </Container>
  )
}

export default SliderItem;