import React from 'react';

import AttemptsList from '../AttemptsList';
import GuessInput from './../GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Banner from '../Banner';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
let gameStatus = 'running'; //win, lose

function Game() {
  const [attempts, setAttempts] = React.useState([]);

  const handleGuessInput = (word) => {
    setAttempts([...attempts, word]);
  };

  const resolution = checkGuess(attempts[attempts.length - 1], answer);
  if (resolution && resolution.every((letter) => letter.status === 'correct')) {
    gameStatus = 'win';
  }

  if (attempts.length === NUM_OF_GUESSES_ALLOWED) {
    gameStatus = 'lose';
  }

  return (
    <>
      <AttemptsList attempts={attempts} answer={answer} />
      {gameStatus === 'running' ? (
        <GuessInput handleGuessInput={handleGuessInput} />
      ) : gameStatus === 'win' ? (
        <Banner type={'happy'}>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{attempts.length} guesses</strong>.
          </p>
        </Banner>
      ) : (
        <Banner type={'sad'}>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
    </>
  );
}

export default Game;
