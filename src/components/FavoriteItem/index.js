import React from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import { 
  Container,
  Rate,
  RateContainer,
  Title,
  ActionContainer,
  DetailButton,
  DeleteButton
} from './styles';

const FavoriteItem = ({ data, navigateDetails, deleteFavorite }) => {
  return (
    <Container>
      <Title size={22}>{data.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Rate>{data.vote_average}</Rate>
      </RateContainer>

      <ActionContainer>
        <DetailButton activeOpacity={0.7} onPress={ () => navigateDetails() }>
          <Title size={14}>Ver Detalhes</Title>
        </DetailButton>

        <DeleteButton activeOpacity={0.7} onPress={ () => deleteFavorite() }>
          <Feather name="trash" size={24} color="#FFF" />
        </DeleteButton>
      </ActionContainer>
    </Container>
  )
}

export default FavoriteItem;