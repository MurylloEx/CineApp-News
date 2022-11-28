import React, { FunctionComponent, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const QueryClientOptions = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      enabled: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  }
});

export interface ReactQueryProviderProps {}

export const ReactQueryProvider: FunctionComponent<PropsWithChildren<ReactQueryProviderProps>> = ({ children }) => {
  return (
    <QueryClientProvider client={QueryClientOptions}>
      {children}
    </QueryClientProvider>
  );
}