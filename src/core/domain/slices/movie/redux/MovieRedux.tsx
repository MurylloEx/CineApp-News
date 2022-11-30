import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from 'src/core/domain/slices/movie';

/**
 * Define what exported actions can be used in App
 */
export type MovieActions = {
  create(movie: Movie): PayloadAction<Movie, string>;
  remove(id: number): PayloadAction<number, string>;
}

/**
 * Define a type for the slice state
 */
export type MovieState = Movie[];

/**
 * Initial value of entity state
 */
const INITIAL_STATE: MovieState = [];

/**
 * Handlers
 */
function CreateMovie(state: MovieState, action: PayloadAction<Movie, string>) {
  return [
    ...state,
    {
      id: Math.ceil(10000 * Math.random()),
      title: action.payload.title,
      description: action.payload.description
    }
  ];
}

function RemoveMovie(state: MovieState, action: PayloadAction<number, string>) {
  return state.filter(movie => movie.id !== action.payload);
}

const Slice = createSlice({
  name: 'movie',
  initialState: INITIAL_STATE,
  reducers: {
    create: CreateMovie,
    remove: RemoveMovie
  },
});

export const MovieSlice = {
  Reducers: Slice.reducer,
  Actions: Slice.actions
};
