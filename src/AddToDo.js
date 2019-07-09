import React, { useState } from 'react';

export default (props) => {

  const [newTask, setNewTask] = useState('');

  const onChange = (e) => {
    setNewTask(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTask(newTask);
    setNewTask('');
  }

  return(
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={newTask} onChange={onChange}></input>
        <input type="submit" value="Add task"></input>
      </form>
    </>
  )
}
