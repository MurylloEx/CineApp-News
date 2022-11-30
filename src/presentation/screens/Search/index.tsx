import React, { Fragment, FunctionComponent } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { RoutesParamList } from 'src/presentation/routes';

export interface SearchProps { }

export const SearchScreen: FunctionComponent<SearchProps> = () => {
  const route = useRoute<RouteProp<RoutesParamList, 'Search'>>();
  const navigation = useNavigation();

  return (
    <Fragment />
  );
}
