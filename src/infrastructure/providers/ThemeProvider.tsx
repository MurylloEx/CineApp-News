import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ProviderComponent } from 'src/core';
import { AppTheme } from 'src/infrastructure/themes';

export interface ThemeProviderProps {}

export const ThemeProvider: ProviderComponent<ThemeProviderProps> = ({ children }) => {
  return (
    <StyledThemeProvider theme={AppTheme}>
      {children}
    </StyledThemeProvider>
  );
}