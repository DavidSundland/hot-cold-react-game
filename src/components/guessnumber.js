import React from 'react';

import './guessnumber.css';

export default function GuessNumber(props) {
    console.log(props);
    return (
        <div className = "guessNumber" >
            Guess #<span className="theNumber">{props.numGuesses}</span>!
        </div >
    );
};
