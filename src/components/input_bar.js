import React, { Component } from 'react';

import TaskList from './task_list';

class Inputbar extends Component {
  constructor(props) {
    super(props);
    this.state={
      inputText: '',
      todoList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    let newtodoList = [...this.state.todoList,this.state.inputText]
    this.setState({
      inputText: '',
      todoList: newtodoList
    })
  }
  handleChange(e) {
    this.setState({
      inputText: e.target.value
    })
  }
  handleDelete(e) {
    const deleteIndex = e.target.id
    let newtodoList = this.state.todoList.slice(0)
    newtodoList.splice(deleteIndex, 1)
    this.setState({
      todoList: newtodoList
    })
  }
  render() {
    return (
      <div>
        <ul>
          <TaskList list={this.state.todoList} handleDelete={this.handleDelete}/>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.inputText} onChange={this.handleChange} placeholder='Do your homework.' />
          <button />
        </form>
      </div>
    )
  }
}

export default Inputbar
