import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import GuessLetter from '../GuessLetter';

function Guess({ attempt, answer }) {
  const result = attempt ? checkGuess(attempt, answer) : undefined;

  return (
    <p className="guess">
      {range(5).map((index) => {
        return (
          <GuessLetter
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
