import { connect } from 'react-redux'
import TaskList from '../components/tasklist'
import {toggleTodo, setVisibilityFilter, deleteTodo} from '../actions/index'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
