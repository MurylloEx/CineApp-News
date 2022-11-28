import React, { FunctionComponent } from 'react';
import { StackRoutes } from 'src/presentation/routes';
import { InfrastructureProvider } from 'src/infrastructure';
import { NavigationProvider } from './NavigationProvider';

export const PresentationProvider: FunctionComponent = () => {
  return (
    <InfrastructureProvider>
      <NavigationProvider>
        <StackRoutes />
      </NavigationProvider>
    </InfrastructureProvider>
  );
}
