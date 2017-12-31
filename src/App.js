import React, { Component } from 'react';
import { Game } from './Game';
import './Game.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <p><a href="https://reactjs.org/tutorial/tutorial.html">React Tutorial</a></p>
        <Game />
      </div>
    );
  }
}

export default App;
