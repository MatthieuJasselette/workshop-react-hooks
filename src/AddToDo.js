import React, { useState } from 'react';

export default (props) => {

  const [newTask, setnewTask] = useState("");

  const onChange = (e) => {
    setnewTask(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.addToDo(newTask);
    setnewTask('');
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
