// action types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
// other consts
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
// action creators
export const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  }
}
export const toggleToDo = index => {
  return {
    type: TOGGLE_TODO,
    index
  }
}
export const setVisbilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
