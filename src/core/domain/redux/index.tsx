import { configureStore } from '@reduxjs/toolkit';
import { MovieSlice } from 'src/core/domain/slices';

/**
 * Export the Store object containing all state data
 */
export const Store = configureStore({
  reducer: {
    Movies: MovieSlice.Reducers
  },
});
