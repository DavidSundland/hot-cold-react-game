import React from 'react';

import './navigation.css';

export default function Navigation(props) {
    return (
        <div className="navigation">
            <span className = "instructions" onClick = { () => props.whatClicked()}>WHAT ?!</span>
            <span className = "newgame" onClick = { () => props.newGameClicked()}>+ NEW GAME</span>
        </div>
    );
};
