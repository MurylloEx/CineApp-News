export interface BluePalette {
  h10: string;
  h20: string;
  h40: string;
  h60: string;
  h80: string;
  h90: string;
}

export interface PurplePalette {
  h20: string;
  h60: string;
}

export interface GreenPalette {
  h20: string;
  h30: string;
  h60: string;
  h80: string;
}

export interface RedPalette {
  h20: string;
  h70: string;
}

export interface OrangePalette {
  h20: string;
  h30: string;
  h40: string;
  h60: string;
  h70: string;
}

export interface GrayPalette {
  h10: string;
  h20: string;
  h50: string;
  h60: string;
  h80: string;
  h90: string;
}

export interface BlueGrayPalette {
  h10: string;
  h20: string;
  h40: string;
}

export interface YellowPalette {
  h20: string;
  h30: string;
  h40: string;
  h60: string;
  h70: string;
}

export interface BlackPalette {
  h90: string;
  h100: string;
}

export interface WhitePalette {
  h90: string;
  h100: string;
}

export interface ThemePalette {
  blue: BluePalette;
  purple: PurplePalette;
  green: GreenPalette;
  red: RedPalette;
  orange: OrangePalette;
  gray: GrayPalette;
  blueGray: BlueGrayPalette;
  yellow: YellowPalette;
  black: BlackPalette;
  white: WhitePalette;
}
