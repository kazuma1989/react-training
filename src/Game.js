import React from 'react';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        {[...Array(3).keys()].map(j => {
          return (
            <div className="board-row">
              {[...Array(3 * j + 3).keys()].slice(3 * j).map(i => this.renderSquare(i))}
            </div>
          ); 
        })}
      </div>
    );
  }
}

export class Game extends React.Component {
  constructor(props) {
    super(props);

    const squares = Array(9).fill(null);
    const xIsNext = true;
    const stepNumber = 0;

    this.state = {
      history: [
        { squares }
      ],
      stepNumber,
      xIsNext,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const xIsNext = !this.state.xIsNext;

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const newHistory = history.concat([
      { squares }
    ]);

    const stepNumber = history.length;

    this.setState({
      history: newHistory,
      stepNumber,
      xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      let label = move === 0 ? 'Go to game start' : `Go to move #${move}`;
      if (move === this.state.stepNumber) {
        label = <b>{label}</b>;
      }

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {label}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    }
    else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
