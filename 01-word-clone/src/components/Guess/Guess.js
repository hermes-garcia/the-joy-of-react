import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ attempt, answer }) {
  const result = attempt ? checkGuess(attempt, answer) : undefined;

  return (
    <p className="guess">
      {range(5).map((index) => {
        return (
          <span
            key={index}
            className={`cell ${
              result && result[index] ? result[index].status : ''
            }`}
          >
            {attempt ? attempt[index] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
