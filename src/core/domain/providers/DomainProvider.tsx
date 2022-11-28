import React, { FunctionComponent, PropsWithChildren } from 'react';
import { BusinessProvider } from '../business/providers';

export const DomainProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <BusinessProvider>
      {children}
    </BusinessProvider>
  );
}
