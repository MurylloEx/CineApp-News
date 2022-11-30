import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProviderComponent } from 'src/core';

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

export const ReactQueryProvider: ProviderComponent<ReactQueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={QueryClientOptions}>
      {children}
    </QueryClientProvider>
  );
}