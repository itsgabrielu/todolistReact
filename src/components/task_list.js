import React from 'react';

const TaskList = (props) => {
  const tasks = props.list
  const ListItems = tasks.map((task) =>
    <li key={tasks.indexOf(task)}> <input key={tasks.indexOf(task)} id={tasks.indexOf(task)} onClick={props.handleCheck} type="checkbox" /> {task.item} <button id={tasks.indexOf(task)} onClick={props.handleDelete}> X </button></li>
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
