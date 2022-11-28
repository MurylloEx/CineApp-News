import React, {
  Fragment,
  FunctionComponent,
  PropsWithChildren
} from 'react';

export interface RenderProps {
  if: boolean;
}

export const Render: FunctionComponent<PropsWithChildren<RenderProps>> = ({ children, if: condition }) => {
  return condition ? <Fragment>{children}</Fragment> : <Fragment />;
}