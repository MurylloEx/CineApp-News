import 'styled-components';
import { ThemePalette } from './ThemePalette';

declare module 'styled-components' {

  export interface DefaultTheme {
    name: string;
    palette: ThemePalette;
  }
  
}