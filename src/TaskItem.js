import React from 'react';

export default (props) => {
  return(
    <div style={{display:"flex"}}>
       <input type="checkbox" onChange={()=>props.toggleCompletion(props.task.id)} />
      <h2>{props.task.title}</h2>
      <button onClick={()=>props.onClick(props.task.id)}>x</button>
    </div>
  )
}
