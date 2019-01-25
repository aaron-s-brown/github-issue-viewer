import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import RepoItem from './RepoItem';
class RepoList extends Component {

  render() {
    let repoList;
    if (this.props.error) {
      repoList = <p>There was an error fetching your repos. Try logging out and entering your token again.</p>
    }
    else {
      repoList = this.props.repos.map(repo => <RepoItem key={repo.id} repo={repo}></RepoItem>); 
    }

    return (
      <Fragment>
        <h2>Repo List</h2>
        {repoList}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    repos: state.repos.repoList,
    error: state.repos.error
  }
}

export default connect(
  mapStateToProps,
  null
)(RepoList);

export { RepoList as ShallowRepoList };