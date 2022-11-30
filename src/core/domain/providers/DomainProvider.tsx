import React, { Fragment, FunctionComponent, PropsWithChildren } from 'react';

export const DomainProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
