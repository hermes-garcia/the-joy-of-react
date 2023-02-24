import React from 'react';

function Banner({ children, type, handleResetGame }) {
  return (
    <div className={`${type} banner`}>
      {children}
      <button onClick={handleResetGame} >Restart Game</button>
    </div>
  );
}

export default Banner;
