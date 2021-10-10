import React from 'react';

import { 
  Container, 
  Name 
} from './styles';

const Genre = ({ name }) => {
  return (
    <Container>
      <Name>{name}</Name>
    </Container>
  )
}

export default Genre;