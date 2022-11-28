import React, { Fragment, FunctionComponent } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { RoutesParamList } from 'src/presentation/routes';
import { Text } from 'react-native';

export interface HomeProps { }

export const Home: FunctionComponent<HomeProps> = () => {
  const route = useRoute<RouteProp<RoutesParamList, 'Home'>>();
  const navigation = useNavigation();

  return (
    <Fragment>
      <Text>Olá</Text>
    </Fragment>
  );
}
