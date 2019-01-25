import React from 'react';
import {shallow} from 'enzyme';

import {ShallowLogin} from './Login';
import renderer from 'react-test-renderer';


describe('<Login>', () => {

  it('renders correctly', () => {
    const submitMock = jest.fn();
    const tree = renderer
      .create(<ShallowLogin setToken={submitMock}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call setToken prop on form submit', () => {
    const submitMock = jest.fn();
    const login = shallow(<ShallowLogin setToken={submitMock}/>);
    const textInput = login.find('#apiKey').first();
    const form = login.find('form').first();

    textInput.simulate('change', { target: { value: '1a2b3c' } });
    form.simulate('submit', { preventDefault: () => {}});

    expect(submitMock.mock.calls.length).toBe(1);
  })
});