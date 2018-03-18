import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/navigation';
import Header from './components/header';
import GuessHeader from './components/guessheader';
import GuessEntry from './components/guessentry';
import GuessNumber from './components/guessnumber';
import GuessList from './components/guesslist';
import WhatDo from './components/whatdo';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            hotCold: "Make Your Guess!",
            targetNum: Math.floor(Math.random()*100+1),
            showWhat: false,
        };
        console.log("INitial list:", this.state.guesses);
    }

    whatScreen() {
        console.log("in whatScreen");
        this.setState({
           showWhat: true,
        });
    }

    byeWhat() {
        console.log("in byeWhat");
        this.setState({
            showWhat: false,
        });
    }

    newGame() {
        console.log("in newGame");
        this.setState({
            guesses: [],
            hotCold: "Make Your Guess!",
            targetNum: Math.floor(Math.random()*100+1),
        });
    }

    addGuess(guess) {
        if (this.state.guesses.indexOf(guess) !== -1) {
            alert("Ya already guessed that number!");
        }
        else {
            this.setState({
                guesses: [...this.state.guesses, guess]
            });
            let howClose = Math.abs(guess-this.state.targetNum);
            if (howClose === 0)
                {
                    this.setState({
                        hotCold: "Snaztastic! Ya got it!"
                    })
                }
            else if (howClose < 2)
                {
                    this.setState({
                        hotCold: "You're burning up!"
                    })
                }
            else if (howClose < 8)
            {
                this.setState({
                    hotCold: "You're hot!"
                })
            }
            else if (howClose < 15)
            {
                this.setState({
                    hotCold: "Pretty warm!"
                })
            }
            else if (howClose < 25)
            {
                this.setState({
                    hotCold: "It's chilly in here!"
                })
            }
            else if (howClose < 45)
            {
                this.setState({
                    hotCold: "Quite cold. Quite."
                })
            }
            else if (howClose < 70)
            {
                this.setState({
                    hotCold: "You're freezing!"
                })
            }
            else
            {
                this.setState({
                    hotCold: "Hell's freezing over."
                })
            }
        }
    }

    render() {
        if (!this.state.showWhat) {
            return (
                <div className = "App" >
                <Navigation whatClicked={event => this.whatScreen()} newGameClicked={event => this.newGame()} />
                    <Header / >
                    <GuessHeader hotCold={this.state.hotCold} / >
                    <GuessEntry onGuess={text => this.addGuess(text)} / >
                    <GuessNumber numGuesses={this.state.guesses.length} / >
                    <GuessList guesses={this.state.guesses} / >
                </div>
            );
        }
        else {
            return (
                <WhatDo gotIt={event => this.byeWhat()}/ >
            );
        }
    }
}

export default App;
