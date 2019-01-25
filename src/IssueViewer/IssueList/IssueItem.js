import React from 'react';

function IssueItem({issue}) {
  
  console.log(issue);
  return (
    <tr className='issue-item'>
      <td>
        {issue.assigneeAvatarURL ?
        <img src={issue.assigneeAvatarURL} alt='Assignee avatar' className='issue-avatar'></img>
        :
        <span>None</span>
        }
      </td>
      <td>
        {issue.title}
      </td>
      <td>
        {issue.createdAt}
      </td>
      <td>
        {issue.updatedAt}
      </td>
    </tr>
  )
}

export default IssueItem;