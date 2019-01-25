import auth from './Login/Auth.reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth
});

export default rootReducer;