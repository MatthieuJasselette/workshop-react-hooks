import React,{useState, useEffect} from 'react';
import uuid from 'uuid';

import AddToDo from './AddToDo';
import ToDos from './ToDos';

export default () => {

  const [toDo, setToDo] = useState([]);
  const [remainingTasks, setRemainingTasks] = useState();

  const addToDo = (task) => {
    const item={
      id: uuid.v4(),
      title: task,
      isCompleted: false
    }
    setToDo([...toDo, item])
  }

  const delToDo = (id) => {
    setToDo([...toDo.filter(item => item.id !== id)])
  }

  const toggleStatus = (id) => {
    setToDo(toDo.map(toDo =>{
      if(toDo.id === id){
        toDo.isCompleted = !toDo.isCompleted
      }
      return toDo;
    }));
  }

  useEffect(()=> {
    setRemainingTasks(toDo.filter(item => item.isCompleted).length)
  },[toDo]);

  return (
    <>
      <AddToDo addToDo={addToDo}/>
      <h3>{remainingTasks} completed / {toDo.length} to complete</h3>
      <ToDos toDo={toDo} onClick={delToDo} toggleStatus={toggleStatus}/>
    </>
  )
}
