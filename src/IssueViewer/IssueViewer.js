import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { SAVE_REPO_LIST, SET_REPO_FAILURE } from '../ActionTypes';
import RepoList from './RepoList/RepoList';
import './IssueViewer.less';


/*
  API calls
  */
const getRepoList = (token) => {
  return axios.get('https://api.github.com/user/repos', {
    headers: {
      'Authorization': 'token ' + token
    }
  })
}

/*
  Redux thunks
*/
const generateRepoList = (token) =>  {
  return function (dispatch) {
    return getRepoList(token).then(
      repoList => dispatch(saveRepoList(repoList)),
      error => dispatch(setRepoFailure())
    );
  };
}

/*
  Redux actions
*/
const saveRepoList = repoList => ({
  type: SAVE_REPO_LIST,
  repoList
})

const setRepoFailure = () => ({
  type: SET_REPO_FAILURE
})

class IssueViewer extends Component {

  componentDidMount() {
    this.props.generateRepoList(this.props.token);
  }

  render() {
    return (
    <div>
      <div className='repo-list-container'>
        <RepoList></RepoList>
      </div>
      <div className='issue-list-container'>
        Issue List
      </div>
    </div>
    )
  }
}

IssueViewer.propTypes = {
  token: PropTypes.string,
  saveRepoList: PropTypes.func.isRequired,
  setRepoFailure: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    token: state.auth.token
  }
}

export default connect(
  mapStateToProps,
  {saveRepoList, setRepoFailure, generateRepoList}
)(IssueViewer);

export { IssueViewer as ShallowIssueViewer };