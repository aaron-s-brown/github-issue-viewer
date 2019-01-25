import { SET_TOKEN, CLEAR_TOKEN } from '../ActionTypes';

export default function auth(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case CLEAR_TOKEN: 
      return {};
    default:
      return state;
  }
};