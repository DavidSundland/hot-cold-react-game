import React from 'react';

import './guesslist.css';

export default function GuessHeader(props) {
    const guessList = props.guesses.sort(function(a, b){return a-b});
    const guessesListed = guessList.map((guess, index) =>
        <li key={index}>
            {guess}
        </li>
        );
    return (
        <ul className = "guessList" >
        {guessesListed}
        </ul>
    );
};
