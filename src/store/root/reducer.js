import initState from './initState';
import { DB_SET, SELECT_MODEL_NAME } from './types.js';

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DB_SET:
      return {
        ...state,
        db: payload,
      };
    case SELECT_MODEL_NAME:
      return {
        ...state,
        selectedModelName: payload,
      };
    default:
      return state;
  }
};

export default reducer;
