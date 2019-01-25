import React from 'react';
import {shallow} from 'enzyme';

import {ShallowHeader} from './Header';


describe('<Header>', () => {

  it('should show logout if token exists', () => {
    const header = shallow(<ShallowHeader clearToken={()=>{}} token='123'/>);
    expect(header.find('.logout-button').length).toBe(1);
  })

  it('should not show logout if token is empty', () => {
    const header = shallow(<ShallowHeader clearToken={()=>{}} token=''/>);
    expect(header.find('.logout-button').length).toBe(0);
  })

  it('should call clearToken prop on logout', () => {
    const clear = jest.fn();
    const header = shallow(<ShallowHeader clearToken={clear} token='123'/>);
    const button = header.find('.logout-button').first();

    button.simulate('click');

    expect(clear.mock.calls.length).toBe(1);
  })
});