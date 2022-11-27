import React, { FunctionComponent } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

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

export interface ReactQueryProviderProps {
  children: React.ReactNode;
}

export const ReactQueryProvider: FunctionComponent<ReactQueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={QueryClientOptions}>
      {children}
    </QueryClientProvider>
  );
}