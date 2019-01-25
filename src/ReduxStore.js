import { createStore } from 'redux'
import RootReducer from './RootReducer'

export function initializeStore() {
  return createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};