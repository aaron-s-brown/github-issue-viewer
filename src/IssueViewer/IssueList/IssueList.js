import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import IssueItem from './IssueItem';
import './IssueList.less';
import { SAVE_ISSUE_LIST, SET_ISSUES_FAILURE } from '../../ActionTypes';

/*
  API calls
*/
 const getIssueList = (token, issueURL) => {
  return axios.get(issueURL, {
    headers: {
      'Authorization': 'token ' + token
    }
  })
}

/*
  Redux thunks
*/
const generateIssueList = (token, issueURL) =>  {
  return function (dispatch) {
    return getIssueList(token, issueURL).then(
      repoList => dispatch(saveIssueList(repoList)),
      error => dispatch(saveIssueFailure())
    );
  };
}

/*
  Redux actions
*/
const saveIssueList = issueList => ({
  type: SAVE_ISSUE_LIST,
  issueList
})

const saveIssueFailure = () => ({
  type: SET_ISSUES_FAILURE
})

class IssueList extends Component {

  componentDidMount() {
    const {
      repos,
      selectedRepoId
    } = this.props;
    if (!selectedRepoId || !repos) {
      return;
    }
    const selectedRepo = repos.find(repo => repo.id === selectedRepoId);
    this.props.generateIssueList(this.props.token, selectedRepo.issuesURL);
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedRepoId && prevProps.selectedRepoId !== this.props.selectedRepoId) {
      const {
        repos,
        selectedRepoId
      } = this.props;

      const selectedRepo = repos.find(repo => repo.id === selectedRepoId);
      this.props.generateIssueList(this.props.token, selectedRepo.issuesURL);
    }
  }

  render() {
    let issueList;
    if (this.props.error) {
      issueList = <p>There was an error fetching your issues.</p>
    }
    else if (!this.props.selectedRepoId) {
      return null;
    }
    else if (!this.props.issues || !this.props.issues.length) {
      issueList = <p>There are no issues to display for this repo.</p>
    }
    else {
      const issues = this.props.issues.map(issue => <IssueItem key={issue.id} issue={issue}></IssueItem>); 
      issueList = (
      <table className='issue-table'>
        <tbody>
          <tr>
            <th>Assignee</th>
            <th>Title</th>
            <th>Created at</th>
            <th>Last Updated</th>
          </tr>
          {issues}
        </tbody>
      </table>
      );
    }

    return (
      <Fragment>
        <h2>Issue List</h2>
        {issueList}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    issues: state.issues.issueList,
    error: state.issues.error,
    token: state.auth.token,
    repos: state.repos.repoList,
    selectedRepoId: state.repos.selectedRepo
  }
}

export default connect(
  mapStateToProps,
  {saveIssueList, saveIssueFailure, generateIssueList}
)(IssueList);

export { IssueList as ShallowIssueList };