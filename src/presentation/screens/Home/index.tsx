import { Text } from 'react-native';
import React, { Fragment, FunctionComponent } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';

import { HomeRouteProp } from 'src/presentation/routes';

export interface HomeProps { }

export const HomeScreen: FunctionComponent<HomeProps> = () => {
  const route = useRoute<HomeRouteProp>();
  const navigation = useNavigation();

  return (
    <Fragment>
      <Text>Olá</Text>
    </Fragment>
  );
}
