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
    case 'INPUT':
      return Object.assign({}, state, {
        value: action.value
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
  // Action is a plane object
  return {
    type: 'SEND',
    value,
  };
}

function input(value) {
  return {
    type: 'INPUT',
    value
  };
}

class FormApp extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.value} onChange={this.props.onChange} />
        <button onClick={this.props.onClick}>Send</button>
        <div>
          {this.props.data}
        </div>
      </div>
    );
  }
}

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: '',
    };
    this.send = this.send.bind(this);
    this.handleInput = this.handleInput.bind(this);

    store.subscribe(() => {
      const state = store.getState();
      this.setState(state);
    });
  }
  send() {
    const { value } = this.state;
    store.dispatch(send(value));
  }
  handleInput({ target: { value } }) {
    store.dispatch(input(value));
  }

  render() {
    return (
      <FormApp value={this.state.value} onChange={this.handleInput} onClick={this.send} data={this.state.data} />
    );
  }
}

export const reduxApp = <AppContainer />;
