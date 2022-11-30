import { RouteProp } from '@react-navigation/core';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export type RoutesParams = {
  Home: undefined;
  Search: undefined;
  Movie: undefined
}

export type ParameterizedRoute<T extends keyof RoutesParams> = RouteProp<RoutesParams, T>;

export type HomeRouteProp         = ParameterizedRoute<'Home'>;
export type SearchRouteProp       = ParameterizedRoute<'Search'>;
export type MovieRouteProp        = ParameterizedRoute<'Movie'>;

export type ParameterizedNavigation<T extends keyof RoutesParams> = DrawerNavigationProp<RoutesParams, T>;

export type HomeNavigationProp    = ParameterizedNavigation<'Home'>;
export type SearchNavigationProp  = ParameterizedNavigation<'Search'>;
export type MovieNavigationProp   = ParameterizedNavigation<'Movie'>;
