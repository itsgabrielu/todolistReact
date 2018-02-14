import React from 'react';
import '../main.css';

const TaskList = (props) => {
  const tasks = props.list

  const ListItems = tasks.map((task, index) =>
    <li key={index}>
      { (task.status) &&
        <div className="taskEntry">
          <input id={index} onChange={props.handleCheck} type="checkbox" value={task.item}/>
          <span> {task.item} </span>
        </div>
      }
      { (!task.status) &&
        <div className="taskEntry">
          <input id={index} onChange={props.handleCheck} type="checkbox" value={task.item} checked/>
          <span className="strikethrough"> {task.item} </span>
        </div>
      }
      <button className="deleteTask" id={tasks.indexOf(task)} onClick={props.handleDelete} value={task.item}>
        X
      </button>
    </li>
  )
  return (
    <div>
      {ListItems}
      <button onClick={props.showComplete}> Completed </button>
      <button onClick={props.showAll}> All </button>
      <button onClick={props.showPending}> Pending </button>
    </div>
  )
}

export default TaskList
