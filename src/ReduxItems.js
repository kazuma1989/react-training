// Reducer
export function formReducer(state, action) {
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

export const initialState = {
  value: '',
};

// Action Creator
export function send(value) {
  // Action is a plane object
  return {
    type: 'SEND',
    value,
  };
}

export function input(value) {
  return {
    type: 'INPUT',
    value
  };
}
