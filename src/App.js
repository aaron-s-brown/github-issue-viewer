import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './Login/Login.js';
import './global.less';
import Header from './Header/Header.js';
class App extends Component {
  render() {

    let content;
    if (this.props.token) {
      content = <p>Logged in as {this.props.token}!</p>
    }
    else {
      content = <Login></Login>;
    }

    return (
      <div className='container'>
        <Header></Header>
        {content}
      </div>
    )
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

export { App as ShallowApp };