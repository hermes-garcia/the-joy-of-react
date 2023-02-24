import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function AttemptsList({ attempts, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} attempt={attempts[index]} answer={answer} />
      ))}
    </div>
  );
}

export default AttemptsList;
