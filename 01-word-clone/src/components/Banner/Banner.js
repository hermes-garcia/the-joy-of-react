import React from 'react';

function Banner({ children, type }) {
  return <div className={`${type} banner`}>{children}</div>;
}

export default Banner;
