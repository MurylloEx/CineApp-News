import React from 'react';
import { Provider } from 'react-redux';
import { ProviderComponent, Store } from 'src/core';

export interface ReduxProviderProps {}

export const ReduxProvider: ProviderComponent<ReduxProviderProps> = ({ children }) => {
  return (
    <Provider store={Store}>
      {children}
    </Provider>
  );
}
