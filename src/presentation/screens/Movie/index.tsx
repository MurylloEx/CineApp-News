import React, { Fragment, FunctionComponent } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { RoutesParamList } from 'src/presentation/routes';

export interface MovieProps { }

export const MovieScreen: FunctionComponent<MovieProps> = () => {
  const route = useRoute<RouteProp<RoutesParamList, 'Movie'>>();
  const navigation = useNavigation();

  return (
    <Fragment />
  );
}
