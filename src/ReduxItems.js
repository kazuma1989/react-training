// Reducer
export function formReducer(state, action) {
  let newState;
  switch (action.type) {
    case 'SEND':
      newState = {
        data: action.value,
        value: ''
      };
      return { ...state, ...newState };

    case 'INPUT':
      newState = {
        value: action.value
      };
      return { ...state, ...newState };

    default:
      return state;
  }
}

export const initialState = {
  value: '',
  data: ''
};

export function send(value) {
  return {
    type: 'SEND',
    value
  };
}

export function input(value) {
  return {
    type: 'INPUT',
    value
  };
}
