import React from 'react';

import VisibleTaskList from '../containers/containerLink';
import {addTodo} from '../actions/index';
import { connect } from 'react-redux'

const Inputbar = ({ dispatch }) => {
  let input

  return (
    <div>
      <h1> My Todo </h1>
      <form onSubmit={
        e => {
          e.preventDefault()
          if (input.value.trim()) {
            dispatch(addTodo(input.value.trim()))
          } else return
          input.value = ''
        }}>
        <input ref={e => input = e} placeholder='Do your homework.' />
        <button />
      </form>
      <ol>
        <VisibleTaskList />
      </ol>
    </div>
  )
}

export default connect()(Inputbar);
