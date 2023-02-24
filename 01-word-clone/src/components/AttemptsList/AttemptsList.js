import React from 'react';

function AttemptsList({ attempts }) {
  return (
    <div className="guess-results">
      {attempts.map((word, index) => (
        <p key={index} className="guess">
          {word}
        </p>
      ))}
    </div>
  );
}

export default AttemptsList;
