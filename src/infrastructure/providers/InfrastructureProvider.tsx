import React from 'react';
import { AxiosProvider } from './AxiosProvider';
import { ThemeProvider } from './ThemeProvider';
import { ReactQueryProvider } from './ReactQueryProvider';
import { CoreProvider, ProviderComponent } from 'src/core';
import { ReduxProvider } from './ReduxProvider';

export const InfrastructureProvider: ProviderComponent = ({ children }) => {
  return (
    <CoreProvider>
      <ReduxProvider>
        <AxiosProvider>
          <ReactQueryProvider>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </ReactQueryProvider>
        </AxiosProvider>
      </ReduxProvider>
    </CoreProvider>
  );
}
