import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import { formReducer, initialState, send, input } from './ReduxItems';
import { FormApp } from './FormApp';

const store = createStore(formReducer, initialState);

function mapStateToProps(state) {
  return {
    value: state.value,
    data: state.data
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick(value) {
      dispatch(send(value));
    },
    onChange({ target: { value } }) {
      dispatch(input(value));
    }
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(FormApp);

export const reactReduxApp = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
