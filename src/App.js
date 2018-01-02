import React, { Component } from 'react';
import { Game } from './Game';
import './Game.css';
import { filterableProductTable } from './FilterableProductTable';
import { BasicExample } from './BasicExample';
import { reduxApp } from './ReduxTrial';
import { reactReduxApp } from './ReactReduxTrial';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React-Redux trial</h1>
        <p><a href="https://mae.chab.in/archives/2885">Reduxの実装とReactとの連携を超シンプルなサンプルを使って解説 | maesblog</a></p>
        <h2>Redux only</h2>
        {reduxApp}
        <h2>React-Redux</h2>
        {reactReduxApp}

        <h1>Tic Tac Toe</h1>
        <p><a href="https://reactjs.org/tutorial/tutorial.html">React Tutorial</a></p>
        <Game />

        <h1>FilterableProductTable</h1>
        <p><a href="https://reactjs.org/docs/thinking-in-react.html">Thinking in React</a></p>
        {filterableProductTable}

        <BasicExample />
      </div>
    );
  }
}

export default App;
