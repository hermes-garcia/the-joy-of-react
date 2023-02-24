import React from 'react';

import AttemptsList from '../AttemptsList';
import GuessInput from './../GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Banner from '../Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [attempts, setAttempts] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running'); //won, lost

  const handleGuessInput = (word) => {
    const newAttempts = [...attempts, word]
    setAttempts(newAttempts);

    if (word.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (newAttempts.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  return (
    <>
      <AttemptsList attempts={attempts} answer={answer} />
      <GuessInput handleGuessInput={handleGuessInput} gameStatus={gameStatus} />
      {gameStatus === 'won' &&
        <Banner type={'happy'}>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{attempts.length} guesses</strong>.
          </p>
        </Banner>
      }
      { gameStatus === 'lost' &&
        <Banner type={'sad'}>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      }
    </>
  );
}

export default Game;
