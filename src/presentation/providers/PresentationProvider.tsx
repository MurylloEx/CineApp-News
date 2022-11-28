import React, { FunctionComponent, PropsWithChildren } from 'react';
import { InfrastructureProvider } from 'src/infrastructure';

export const PresentationProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <InfrastructureProvider>
      {children}
    </InfrastructureProvider>
  );
}
