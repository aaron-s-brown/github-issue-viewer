import { SAVE_REPO_LIST, SET_REPO_FAILURE, SELECT_REPO } from '../../ActionTypes';

const initialState = {
  error: false,
  repoList: [],
  selectedRepo: null
}

export default function repos(state = initialState, action) {
  switch (action.type) {
    case SAVE_REPO_LIST:
      return {
        repoList: action.repoList.data.map(repo => ({
          id: repo.id,
          issuesURL: repo.issues_url.replace(/\{\/number\}/, ''),
          name: repo.name
        })),
        error: false
      };
    case SET_REPO_FAILURE: 
      return {
        repoList: [],
        error: true
      };
    case SELECT_REPO:
      return {
        ...state,
        selectedRepo: action.repoId
      }
    default:
      return state;
  }
};