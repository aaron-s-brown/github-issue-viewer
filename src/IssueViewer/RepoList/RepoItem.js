import React from 'react';
import { connect } from 'react-redux';
import './RepoItem.less'
import { SELECT_REPO } from '../../ActionTypes';

/*
  Redux actions
*/
const selectRepo = repoId => ({
  type: SELECT_REPO,
  repoId
})

function RepoItem ({repo, selectRepo}) {

  return (
    <button className='repo-item' onClick={selectRepo.bind(null, repo.id)}>
      {repo.name}
    </button>
  );
}

export default connect(
  null,
  {selectRepo}
)(RepoItem);

export { RepoItem as ShallowRepoItem };