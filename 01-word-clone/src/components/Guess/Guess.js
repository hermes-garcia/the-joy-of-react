import React from 'react';
import {range} from "../../utils";

function Guess({attempt}) {
  const arr = range(0,5);

  return (
    <p className="guess">
      {
        arr.map(index => {
          const letter = (attempt) ? attempt[index] : '';
          return (
            <span key={index} className="cell">{letter}</span>
          )
        })
      }
    </p>
  );
}

export default Guess;
