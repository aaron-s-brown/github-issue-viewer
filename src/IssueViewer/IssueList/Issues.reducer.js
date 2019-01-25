import { SAVE_ISSUE_LIST, SET_ISSUES_FAILURE } from '../../ActionTypes';

const initialState = {
  error: false,
  issueList: [],
  selectedIssue: null
}

export default function issues(state = initialState, action) {
  switch (action.type) {
    case SAVE_ISSUE_LIST:
      
      return {
        issueList: action.issueList.data.map(issue => {
          const avatarURL = issue.assignee ? issue.assignee.avatar_url : null;
          return {
            id: issue.id,
            title: issue.title,
            createdAt: issue.created_at,
            updatedAt: issue.updated_at,
            assigneeAvatarURL: avatarURL
          }
        }),
        error: false
      };
    case SET_ISSUES_FAILURE: 
      return {
        issueList: [],
        error: true
      };
      
    default:
      return state;
  }
};