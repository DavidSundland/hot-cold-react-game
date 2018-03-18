import React from 'react';

import './guessheader.css';

export default function GuessHeader(props) {
    return ( < div className = "guessHeader" >
            {props.hotCold} < /
        div >
    );
};
