import { DrawerNavigationProp } from '@react-navigation/drawer'

export type RoutesParamList = {
  Home: undefined;
  Search: undefined;
  Movie: undefined
}

export type ParameterizedRoute<T extends keyof RoutesParamList> = DrawerNavigationProp<RoutesParamList, T>;

export type HomeNavigationProp    = ParameterizedRoute<'Home'>;
export type SearchNavigationProp  = ParameterizedRoute<'Search'>;
export type MovieNavigationProp   = ParameterizedRoute<'Movie'>;
