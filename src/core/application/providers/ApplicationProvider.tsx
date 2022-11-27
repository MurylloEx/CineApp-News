import React, { Fragment, FunctionComponent, PropsWithChildren } from 'react';

export const CoreProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
