import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login/Login.js';
import { Provider } from 'react-redux';
import { initializeStore } from './ReduxStore';

const store = initializeStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}><Login></Login></Provider>
    );
  }
}

export default App;
