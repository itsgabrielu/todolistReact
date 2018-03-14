import React from 'react';
import ReactDOM from 'react-dom';
import Inputbar from './components/input_bar';
import { createStore } from 'redux';
import todoApp from './reducers/reducers';

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions/actions'

let store = createStore(todoApp);
// Log the initial state
console.log(store.getState())
 
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()


const Container = () => {
  return(
    <div>
      <h1> My Todo </h1>
      <Inputbar />
    </div>
  )
}


ReactDOM.render(<Container />, document.getElementById('root'))
