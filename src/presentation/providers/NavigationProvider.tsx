import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ProviderComponent } from 'src/core';

export const NavigationProvider: ProviderComponent = ({ children }) => {
  return (
    <NavigationContainer>
      {children}
    </NavigationContainer>
  );
}
