import React from 'react';
import { range } from '../../utils';

function Guess({ attempt }) {
  return (
    <p className="guess">
      {range(0, 5).map((index) => {
        const letter = attempt ? attempt[index] : '';
        return (
          <span key={index} className="cell">
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
