// https://redux.js.org/#the-gist
import { createStore } from 'redux';

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
