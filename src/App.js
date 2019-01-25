import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './Login/Login.js';
class App extends Component {
  render() {
    if (this.props.token) {
      return <p>Logged in as {this.props.token}!</p>
    }
    else {
      return (
        <Login></Login>
      );
    }
  }
}

App.propTypes = {
  token: PropTypes.string
};

function mapStateToProps(state) {
  return {
    token: state.auth.token
  }
}

export default connect(
  mapStateToProps,
  null
)(App);
