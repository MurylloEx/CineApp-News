import React, { Fragment, FunctionComponent } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { MovieRouteProp } from 'src/presentation/routes';

export interface MovieProps { }

export const MovieScreen: FunctionComponent<MovieProps> = () => {
  const route = useRoute<MovieRouteProp>();

  const navigation = useNavigation();

  return (
    <Fragment />
  );
}
