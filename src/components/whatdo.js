import React from 'react';

import './whatdo.css';

export default function WhatDo(props) {
    return (
        <div className="whatDo">
            <div className="whatDoInner">
                <h2>What do I do?</h2>
                <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
                <ol>
                    <li>Your computer's browser pick a random secret number between 1 to 100 and keeps it hidden.</li>
                    <li>You need to guess until you can find the hidden secret number or you get bored and decide to do something else.</li>
                    <li>You will get feedback on how close ("careful, you're about to trip over it") or far ("you're an idiot, are you even trying?") your guess is.</li>
                </ol>
                <p>So, are you ready?</p>
                <button className = "gotIt" onClick = { () => props.gotIt()}>Let's Do This!</button>
            </div>
        </div>
    );
};
