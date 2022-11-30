import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from 'src/core/domain/redux';
import { MovieActions, MovieSlice, MovieState } from 'src/core/domain/slices/movie/redux';

export type UseMoviesType = [MovieState, MovieActions];

export function useMovies(): UseMoviesType {
  const dispatch = useDispatch();
  const state = useSelector<StoreType, MovieState>((state) => state.Movies);
  const actions = bindActionCreators(MovieSlice.Actions, dispatch);

  return [state, actions];
}
