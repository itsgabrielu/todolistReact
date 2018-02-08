import React from 'react';

const TaskList = (props) => {
  const tasks = props.list
  const ListItems = tasks.map((task) =>
    <li key={tasks.indexOf(task)}> {task} <button id={tasks.indexOf(task)} onClick={props.handleDelete}> X </button></li>
  )

  return (
    ListItems
  )
}

export default TaskList
