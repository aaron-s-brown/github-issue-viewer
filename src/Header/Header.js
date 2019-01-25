import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CLEAR_TOKEN } from '../ActionTypes';
import './Header.less';

/*
  Redux actions
*/
const clearToken = () => ({
  type: CLEAR_TOKEN
});


const Header = ({token, clearToken}) => {
  const showLogout = !!token;
  return (
    <div className='header-container'>
      <h1 className='header-text'>Github Issue Viewer</h1>
      {showLogout && 
      <button className='logout-button' onClick={clearToken}>Logout</button>
      }
    </div>
  )
}

Header.propTypes = {
  token: PropTypes.string,
  clearToken: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    token: state.auth.token
  }
}

export default connect(
  mapStateToProps,
  {clearToken}
)(Header);

export { Header as ShallowHeader };