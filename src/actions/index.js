// other consts
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
// action creators
let nextId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    text,
    id: nextId++
  }
}
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  }
}
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}