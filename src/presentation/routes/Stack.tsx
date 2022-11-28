import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RoutesParamList } from './Types';
import {
  Home,
  Search,
  Movie
} from 'src/presentation/screens';

const Stack = createStackNavigator<RoutesParamList>();

export interface StackRoutesProps { }
 
export const StackRoutes: FunctionComponent<StackRoutesProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Search"
        component={Search}
      />
      <Stack.Screen
        name="Movie"
        component={Movie}
      />
    </Stack.Navigator>
  );
}