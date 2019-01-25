import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {shallow} from 'enzyme';

import App, {ShallowApp} from './App';
import Login from './Login/Login';

import { initializeStore } from './ReduxStore';
const store = initializeStore();


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders Login if no token is present', () => {
  const app = shallow(<ShallowApp token=''></ShallowApp>);
  expect(app.find(Login).length).toBe(1);
});

it('renders success message if token is present', () => {
  const app = shallow(<ShallowApp token='12345'></ShallowApp>);
  expect(app.find(Login).length).toBe(0);
  expect(app.find('p').length).toBe(1);
});