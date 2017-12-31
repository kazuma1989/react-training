import React, { Component } from 'react';
import { Game } from './Game';
import './Game.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <p><a href="https://codepen.io/gaearon/pen/oWWQNa?editors=0100">at codepen</a></p>
        <Game />
      </div>
    );
  }
}

export default App;
