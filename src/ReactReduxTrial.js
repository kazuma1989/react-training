import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

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
  value: '',
};
const store = createStore(formReducer, initialState);

// stateの状態を購読。状態に変化があったらリスナーを実行
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

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
        <button onClick={this.props.onClick.bind(null, this.props.value)}>Send</button>
        <div>
          {this.props.data}
        </div>
      </div>
    );
  }
}

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
