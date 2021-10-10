import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Results from '../pages/Results';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
          title: 'Detalhes'
        }}
      />
      <Stack.Screen
        name="Results"
        component={Results}
        options={{
          title: 'Sua busca',
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#141a29'
          },
          headerTitleStyle: {
            color: '#FFF'
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default StackRoutes;