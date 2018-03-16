import React from 'react';
import '../main.css';

const TaskList = ({todos, toggleTodo, deleteTodo, setVisibilityFilter}) => {

  return (
    <div>
      { todos.map(todo =>
        <div key={todo.id} onClick={() => toggleTodo(todo.id)}>
        <li
          style={ {
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
        >
        {todo.text}
        </li>
        <button onClick={() => deleteTodo(todo.id)}>
          X
        </button>
        </div>
      )}
      <button onClick={() => setVisibilityFilter('SHOW_ALL')}> All </button>
      <button onClick={() => setVisibilityFilter('SHOW_COMPLETED')}> Complete </button>
      <button onClick={() => setVisibilityFilter('SHOW_ACTIVE')}> Pending </button>
    </div>
  )
}

export default TaskList
