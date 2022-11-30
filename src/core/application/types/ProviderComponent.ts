import { FunctionComponent, PropsWithChildren } from 'react';

export type ProviderComponent<T = unknown> = FunctionComponent<PropsWithChildren<T>>;
