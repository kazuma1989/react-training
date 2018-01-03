import React from 'react';
import { createStore } from 'redux';
// import { connect } from 'react-redux';

import { formReducer, initialState, send, input } from './ReduxItems';
import { FormApp } from './FormApp';

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: '',
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);

    this.props.store.subscribe(() => {
      const state = this.props.store.getState();
      this.setState(state);
    });
  }

  onClick(value) {
    this.props.store.dispatch(send(value));
  }

  onChange(value) {
    this.props.store.dispatch(input(value));
  }

  render() {
    return (
      <FormApp
        value={this.state.value}
        data={this.state.data}
        onClick={this.onClick}
        onChange={this.onChange}
      />
    );
  }
}

const store = createStore(formReducer, initialState);

export const reduxApp = <AppContainer store={store} />;
