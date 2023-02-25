import React from 'react';
import { KEYBOARD_KEYS } from '../../constants';

function Key({ letter, status }) {
  const keyStatus = status.find((key) => key.letter === letter),
        className = keyStatus ? `key ${keyStatus.status}` : 'key';
  return <span className={className}>{letter}</span>;
}

function Keyboard({ keyStatus }) {
  const firstRow = KEYBOARD_KEYS.slice(0, 10),
    secondRow = KEYBOARD_KEYS.slice(10, 19),
    thirdRow = KEYBOARD_KEYS.slice(19);

  return (
    <div className="keyboard-wrapper">
      <div className="keyboard-row">
        {firstRow.map((letter, index) => (
          <Key key={index} letter={letter} status={keyStatus} />
        ))}
      </div>

      <div className="keyboard-row">
        {secondRow.map((letter, index) => (
          <Key key={index} letter={letter} status={keyStatus} />
        ))}
      </div>

      <div className="keyboard-row">
        {thirdRow.map((letter, index) => (
          <Key key={index} letter={letter} status={keyStatus} />
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
