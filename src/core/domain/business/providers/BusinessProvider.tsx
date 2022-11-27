import React, { Fragment, FunctionComponent, PropsWithChildren } from 'react';

export const BusinessProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
