import auth from './Login/Auth.reducer.js';
import repos from './IssueViewer/RepoList/Repos.reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth,
  repos
});

export default rootReducer;