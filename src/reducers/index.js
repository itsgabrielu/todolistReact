import {combineReducers} from 'redux'
import visibilityFilter from './visibilityfilters'
import todos from './todos'

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
