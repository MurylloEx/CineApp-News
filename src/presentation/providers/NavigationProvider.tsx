import { NavigationContainer } from '@react-navigation/native';
import React, { FunctionComponent, PropsWithChildren } from 'react';

export const NavigationProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <NavigationContainer>
      {children}
    </NavigationContainer>
  );
}
