import React from 'react';

function GuessLetter({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

export default GuessLetter;
