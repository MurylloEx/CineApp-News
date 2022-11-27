import { DefaultTheme } from 'styled-components';

import {
  BlackPalette,
  BlueGrayPalette,
  BluePalette,
  GrayPalette,
  GreenPalette,
  OrangePalette,
  PurplePalette,
  RedPalette, 
  WhitePalette, 
  YellowPalette 
} from 'src/core/types';

const BlueTheme: BluePalette = {
  h10: '#F2F4FF',
  h20: '#CCD3FF',
  h40: '#99A8FF',
  h60: '#0025FC',
  h80: '#001380',
  h90: '#000B4C',
}

const PurpleTheme: PurplePalette = {
  h20: '#E6DFFF',
  h60: '#5A00FF',
}

const GreenTheme: GreenPalette = {
  h20: '#CCFFF7',
  h30: '#97FCE9',
  h60: '#00D4A9',
  h80: '#008065'
}

const RedTheme: RedPalette = {
  h20: '#FFCCCE',
  h70: '#B3363B'
}

const OrangeTheme: OrangePalette = {
  h20: '#FFE3CC',
  h30: '#FFCCA1',
  h40: '#FFAC66',
  h60: '#FF8219',
  h70: '#CC6813'
}

const GrayTheme: GrayPalette = {
  h10: '#FAFAFA',
  h20: '#F0F0F0',
  h50: '#BDBCBC',
  h60: '#A3A3A3',
  h80: '#707070',
  h90: '#575757'
}

const BlueGrayTheme: BlueGrayPalette = {
  h10: '#EFF6FA',
  h20: '#DCE2E5',
  h40: '#ABB0B2'
}

const YellowTheme: YellowPalette = {
  h20: '#FFF2CC',
  h30: '#FFE699',
  h40: '#FFD966',
  h60: '#FFC000',
  h70: '#CC8C00'
}

const BlackTheme: BlackPalette = {
  h90: '#101010',
  h100: '#000000'
}

const WhiteTheme: WhitePalette = {
  h90: '#EFEFEF',
  h100: '#FFFFFF'
}

export const AppTheme: DefaultTheme = {
  name: 'App Theme',
  palette: {
    blue: BlueTheme,
    purple: PurpleTheme,
    green: GreenTheme,
    red: RedTheme,
    orange: OrangeTheme,
    blueGray: BlueGrayTheme,
    gray: GrayTheme,
    yellow: YellowTheme,
    black: BlackTheme,
    white: WhiteTheme
  }
};