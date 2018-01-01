import React, { Component } from 'react';
import { Game } from './Game';
import './Game.css';

import { filterableProductTable } from './FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <p><a href="https://reactjs.org/tutorial/tutorial.html">React Tutorial</a></p>
        <Game />
        
        <h1>FilterableProductTable</h1>
        <p><a href="https://reactjs.org/docs/thinking-in-react.html">Thinking in React</a></p>
        {filterableProductTable}
      </div>
    );
  }
}

export default App;
