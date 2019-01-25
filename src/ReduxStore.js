import { createStore, compose, applyMiddleware } from 'redux'
import RootReducer from './RootReducer'
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function initializeStore() {
  const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
  return createStore(
    RootReducer, 
    persistedState,
    composeEnhancer(applyMiddleware(thunk)),
    );
};