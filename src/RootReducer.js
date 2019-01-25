import auth from './Login/Auth.reducer.js';
import repos from './IssueViewer/RepoList/Repos.reducer.js';
import issues from './IssueViewer/IssueList/Issues.reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth,
  repos,
  issues
});

export default rootReducer;