import React, { useState, useEffect } from 'react';
import uuid from 'uuid';

import AddToDo from './AddToDo.js';
import TaskMap from './TaskMap.js';

export default () => {
  const firstTask = [{
    id: uuid.v4(),
    title: "Ecrire son premier hooks"
  },
  {
    id: uuid.v4(),
    title: "Ajouter une tâche",
    isCompleted : false
  },
  {
    id: uuid.v4(),
    title: "Supprimer une tâche",
    isCompleted : false
  },
  {
    id: uuid.v4(),
    title: "Valider une tâche",
    isCompleted : false
  }];
  const [tasks, setTasks] = useState(firstTask);
  const [tasksRemaining, setTasksRemaining] = useState(0)

  const addTask = (newTask) => {
    const item = {
      id: uuid.v4(),
      title: newTask
    }
    setTasks([...tasks, item])
  }

  const delTask = (id) => {
    setTasks([...tasks.filter(task => task.id !== id)])
  }

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task =>{
      if(task.id === id){
        task.isCompleted = !task.isCompleted
      }
      return task
    }));
  }

  useEffect(() => { setTasksRemaining(tasks.filter(task => task.isCompleted).length) }, [tasks]);

  return(
    <>
      <AddToDo addTask={addTask}/>
      <h2>Tâche réalisées : {tasksRemaining} / {tasks.length}</h2>
      <TaskMap tasks={tasks} onClick={delTask} toggleCompletion={toggleCompletion}/>
    </>
  )
}
