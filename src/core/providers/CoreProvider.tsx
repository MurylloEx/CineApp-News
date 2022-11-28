import React, { FunctionComponent, PropsWithChildren } from 'react';
import { ApplicationProvider } from 'src/core/application';

export const CoreProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <ApplicationProvider>
      {children}
    </ApplicationProvider>
  );
}
