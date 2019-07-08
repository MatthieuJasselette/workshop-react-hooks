import React from 'react';

export default (props) => {
  return(
    <>
      <ul>
        {props.toDo.map(toDo =>
            <li key={toDo.id} style={{display:"flex"}}>
              <input type="checkbox" onChange={() => props.toggleStatus(toDo.id)}/>
              <h1>{toDo.title}</h1>
              <button onClick={()=>props.onClick(toDo.id)}>X</button>
            </li>
        )}
      </ul>
    </>
  )
}
