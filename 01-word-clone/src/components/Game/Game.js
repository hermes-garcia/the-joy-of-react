import React from 'react';

import AttemptsList from '../AttemptsList';
import GuessInput from './../GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [attempts, setAttempts] = React.useState([]);

  const handleGuessInput = (word) => {
    console.log({ word });
    setAttempts([...attempts, word]);
  };

  return (
    <>
      <AttemptsList attempts={attempts} />
      <GuessInput handleGuessInput={handleGuessInput} />
    </>
  );
}

export default Game;
