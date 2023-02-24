import React from 'react';

import AttemptsList from '../AttemptsList';
import GuessInput from './../GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Banner from '../Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [attempts, setAttempts] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running'); //won, lost

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  const handleGuessInput = (word) => {
    const newAttempts = [...attempts, word];
    setAttempts(newAttempts);

    if (word.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (newAttempts.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  const handleResetGame = () => {
    setGameStatus('running');
    setAttempts([]);
    setAnswer(sample(WORDS.filter((word) => word !== answer)));
  };

  return (
    <>
      <AttemptsList attempts={attempts} answer={answer} />
      <GuessInput handleGuessInput={handleGuessInput} gameStatus={gameStatus} />
      {gameStatus === 'won' && (
        <Banner type={'happy'} handleResetGame={handleResetGame}>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{attempts.length} guesses</strong>.
          </p>
        </Banner>
      )}
      {gameStatus === 'lost' && (
        <Banner type={'sad'} handleResetGame={handleResetGame}>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
    </>
  );
}

export default Game;
