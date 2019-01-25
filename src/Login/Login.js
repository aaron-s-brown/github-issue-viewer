import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SET_TOKEN } from '../ActionTypes';
import './Login.less';

/*
  Redux actions
*/
const setToken = token => ({
  type: SET_TOKEN,
  token
});

class Login extends Component { 

  state = {
    apiKey: ''
  };

  inputChange = event => {
    this.setState({apiKey: event.target.value});
  };

  handleSubmit= event => {
    this.props.setToken(this.state.apiKey);
    event.preventDefault();
  };
  
  render() {
    return (
    <div className='login'>  
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='apiKey' className='login-label'>Enter your Github API key</label>
        <input type='text' id='apiKey' className='apiKey' onChange={this.inputChange} value={this.state.apiKey}></input>
        <input type='submit' value='Submit' className='login-submit'></input>
      </form>
    </div>
    );
  }
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default connect(
  null,
  {setToken}
)(Login);

export { Login as ShallowLogin };