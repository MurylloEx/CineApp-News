import React from 'react';
import PropTypes from 'prop-types';

const Render = ({ children = null, if: isTruthy = false }) => {
  let content = null;

  if (isTruthy) {
    content = children;
  }

  return <>{content}</>;
}

Render.propTypes = {
  children: PropTypes.node,
  if: PropTypes.any,
};

export default Render;