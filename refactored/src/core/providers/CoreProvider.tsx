import React, { FunctionComponent, PropsWithChildren } from 'react';
import { AxiosProvider } from './AxiosProvider';
import { ThemeProvider } from './ThemeProvider';
import { ReactQueryProvider } from './ReactQueryProvider';

export const CoreProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
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