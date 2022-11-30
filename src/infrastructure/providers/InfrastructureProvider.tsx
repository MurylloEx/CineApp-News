import React from 'react';
import { AxiosProvider } from './AxiosProvider';
import { ThemeProvider } from './ThemeProvider';
import { ReactQueryProvider } from './ReactQueryProvider';
import { ProviderComponent } from 'src/core';

export const InfrastructureProvider: ProviderComponent = ({ children }) => {
  return (
    <AxiosProvider>
      <ReactQueryProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </ReactQueryProvider>
    </AxiosProvider>
  );
}
