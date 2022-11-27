import React, { FunctionComponent, PropsWithChildren } from 'react';
import { 
  ThemeProvider as StyledThemeProvider 
} from 'styled-components';

import { AppTheme } from 'src/infrastructure/themes';

export interface ThemeProviderProps {}

export const ThemeProvider: FunctionComponent<PropsWithChildren<ThemeProviderProps>> = ({ children }) => {
  return (
    <StyledThemeProvider theme={AppTheme}>
      {children}
    </StyledThemeProvider>
  );
}