import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ attempt, answer }) {
  const result = attempt ? checkGuess(attempt, answer) : undefined;

  return (
    <p className="guess">
      {range(5).map((index) => {
        return (
          <Cell
            key={index}
            letter={result ? result[index].letter : undefined}
            status={result ? result[index].status : undefined}
          />
        );
      })}
    </p>
  );
}

export default Guess;
