import React from 'react';

import TaskItem from './TaskItem.js';

export default (props) => {
  return(
    <>
      {props.tasks.map(task => (
        <TaskItem task={task} key={task.id} toggleCompletion={props.toggleCompletion} onClick={props.onClick}/>
      ))}
    </>
  )
}
