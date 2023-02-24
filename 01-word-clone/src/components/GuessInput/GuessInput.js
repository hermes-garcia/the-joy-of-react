import React from 'react';

function GuessInput() {

    const [word, setWord] = React.useState('');

    const handleWordSubmit = (ev) => {
        ev.preventDefault();
        console.log(word);
        setWord('');
    };

    return (
        <form className="guess-input-wrapper" onSubmit={handleWordSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                required
                id="guess-input"
                type="text"
                pattern="[A-Za-z]{5}"
                maxLength="5"
                title="5 letter word"
                placeholder="5 letter word"
                value={word}
                onChange={({target}) => {
                    const word = target.value;
                    setWord(word.toUpperCase());
                }}
            />
        </form>
    );
}

export default GuessInput;
