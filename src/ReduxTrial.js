import React from 'react';
import { createStore } from 'redux';

// https://redux.js.org/#the-gist
{
  function counter(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }

  let initialState = 10;
  let store = createStore(counter, initialState);

  store.subscribe(() =>
    console.log(store.getState())
  );

  store.dispatch({ type: 'INCREMENT' });
  // 11
  store.dispatch({ type: 'INCREMENT' });
  // 12
  store.dispatch({ type: 'DECREMENT' });
  // 11
}

// Reducer
function formReducer(state, action) {
  switch (action.type) {
    case 'SEND':
      return Object.assign({}, state, {
        data: action.value,
        value: ''
      });
    default:
      return state;
  }
}

// createStore（）メソッドを使ってStoreの作成
const initialState = {
  value: null,
};
const store = createStore(formReducer, initialState);

// stateの状態を購読。状態に変化があったらリスナーを実行
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

// ActionをReducerに伝播
store.dispatch(send('first'));

// Action Creator
function send(value) {
  // Action
  return {
    type: 'SEND',
    value,
  };
}

// function actionCreators() {
//   return send('first');
// }

class FormApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: ''
    };
    this.send = this.send.bind(this);
    this.handleInput = this.handleInput.bind(this);

    store.subscribe(() => {
      const state = store.getState();
      this.setState(state);
    });
  }
  send() {
    store.dispatch(send(this.state.value));
  }
  handleInput({ target: { value } }) {
    this.setState({
      value
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleInput} />
        <button onClick={this.send}>Send</button>
        <div>
          {this.state.data}
        </div>
      </div>
    );
  }
}

export const reduxApp = <FormApp />;
