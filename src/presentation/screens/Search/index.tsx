import React, { Fragment, FunctionComponent } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { SearchRouteProp } from 'src/presentation/routes';

export interface SearchProps { }

export const SearchScreen: FunctionComponent<SearchProps> = () => {
  const route = useRoute<SearchRouteProp>();
  const navigation = useNavigation();

  return (
    <Fragment />
  );
}
