import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SET_TOKEN } from '../ActionTypes';

/*
  Redux actions
*/
const setToken = token => ({
  type: SET_TOKEN,
  token
});

class Login extends React.Component { 

  state = {
    apiKey: '1'
  };

  inputChange = event => {
    this.setState({apiKey: event.target.value});
  };

  handleSubmit= event => {
    this.props.setToken(this.state.apiKey);
    console.log(this.state.apiKey);
    event.preventDefault();
  };
  
  render() {
    return (
    <div className='container'>  
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='apiKey'>Enter your Github API key</label>
        <input type='text' id='apiKey' onChange={this.inputChange} value={this.state.apiKey}></input>
        <input type='submit' value='Submit'></input>
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