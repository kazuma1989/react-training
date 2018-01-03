import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';

import { formReducer, initialState, send, input } from './ReduxItems';
import { FormApp } from './FormApp';

function mapStateToProps(state) {
  return {
    value: state.value,
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch(send(value));
    },
    onChange(value) {
      dispatch(input(value));
    }
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(FormApp);

const store = createStore(formReducer, initialState);

export const reactReduxApp = (
  <AppContainer store={store} />
);

// // Use Provider rather than directly pass store
// import { Provider } from 'react-redux';
// export const reactReduxApp = (
//   <Provider store={store}>
//     <AppContainer />
//   </Provider>
// );
