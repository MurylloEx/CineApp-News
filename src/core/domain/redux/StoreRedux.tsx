import { configureStore } from '@reduxjs/toolkit';
import { Movie, MovieSlice } from 'src/core/domain/slices';

export interface StoreType {
  Movies: Movie[];
}

/**
 * Export the Store object containing all state data
 */
export const Store = configureStore({
  reducer: {
    Movies: MovieSlice.Reducers
  },
});
