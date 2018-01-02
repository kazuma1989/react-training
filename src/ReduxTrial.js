import React from 'react';
import { createStore } from 'redux';
// import { Provider, connect } from 'react-redux';

import { formReducer, initialState, send, input } from './ReduxItems';
import { FormApp } from './FormApp';

const store = createStore(formReducer, initialState);

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: '',
    };

    store.subscribe(() => {
      const state = store.getState();
      this.setState(state);
    });
  }

  send(value) {
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
