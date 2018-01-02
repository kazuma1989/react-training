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


// /* Storeの実装 */

// // 初期state変数（initialState）の作成
// const initialState = {
//   value: null,
// };
// // createStore（）メソッドを使ってStoreの作成
// const store = createStore(formReducer, initialState);

// // ActionをReducerに伝播
// store.dispatch(actionCreators());


// // stateの状態を購読。状態に変化があったらリスナーを実行
// store.subscribe(() => {

//   /* リスナーの処理を書く */

//   // stateを取得
//   const state = store.getState();
//   console.log(state);
// });

// /* Actionの実装 */

// // Action名の定義
// const SEND = 'SEND';

// // Action Creator
// function send(value) {
//   // Action
//   return {
//     type: SEND,
//     value,
//   };
// }

// // Reducer
// function formReducer(state, action) {
//   switch (action.type) {
//     case SEND:
//       return Object.assign({}, state, {
//         value: action.value,
//       });
//     default:
//       return state;
//   }
// }

// function actionCreators() {
//   return send('foo');
// }

export const reduxApp = null;
