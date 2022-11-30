import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RoutesParams } from './Routes';
import {
  HomeScreen,
  SearchScreen,
  MovieScreen
} from 'src/presentation/screens';

const Stack = createStackNavigator<RoutesParams>();

export interface StackRoutesProps { }
 
export const StackRoutes: FunctionComponent<StackRoutesProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
      />
      <Stack.Screen
        name="Movie"
        component={MovieScreen}
      />
    </Stack.Navigator>
  );
}