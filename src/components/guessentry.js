import React from 'react';

import './guessentry.css';

//<form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
//    <input type="text" ref={input => this.textInput = input} />
//<button>Add</button>
//<button type="button" onClick={() => this.setEditing(false)}>
//    Cancel
//</button>
//</form>

export default class GuessEntry extends React.Component {
    constructor(props) {
        super(props);
        }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        if (!text) {
            alert("Please enter a guess!");
        }
        else if (!Number(text)) {
            alert("Please enter a number!");
        }
        else if (text.indexOf(".") !== -1){
            alert("Please enter an integer!");
        }
        else if (Number(text)<1 || Number(text)>100){
            alert("Please enter a number between 1 and 100!");
        }
        else {
            this.props.onGuess(Number(text));
        }
        this.textInput.value = '';
    }

    render() {
        return (
            <form className = "guessEntry" onSubmit={(e) => this.onSubmit(e)}>
                <input type = "text" placeholder="Enter Your Guess" ref={input => this.textInput = input} />
                <button type="submit" >Guess</button>
            </form>
        );
    };
};
