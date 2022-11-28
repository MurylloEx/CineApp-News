import React, { FunctionComponent, PropsWithChildren } from 'react';
import { DomainProvider } from 'src/core/domain';

export const ApplicationProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <DomainProvider>
      {children}
    </DomainProvider>
  );
}
