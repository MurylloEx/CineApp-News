import { FunctionComponent } from 'react';

export type CompoundComponent<T, K> = FunctionComponent<T> & K;