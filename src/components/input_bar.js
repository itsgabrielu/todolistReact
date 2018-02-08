import React, { Component } from 'react';

const TaskList = (props) => {
  const tasks = props.list
  const ListItems = tasks.map((task) =>
    <li key={tasks.indexOf(task)}> {task} </li>
  )
  return (
    ListItems
  )
}

class Inputbar extends Component {
  constructor(props) {
    super(props);
    this.state={
      inputText: '',
      todoList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log('pre add',this.state.todoList)
    let newtodoList = [...this.state.todoList,this.state.inputText]
    console.log('newtodoList', newtodoList)
    this.setState({
      inputText: '',
      todoList: newtodoList
    })
    console.log('post add',this.state.todoList)
  }
  handleChange(e) {
    this.setState({
      inputText: e.target.value
    })
  }

  render() {
    return (
      <div>
        <ul> <TaskList list={this.state.todoList}/> </ul>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.inputText} onChange={this.handleChange} placeholder='Do my homework.' />
          <button />
        </form>
      </div>
    )
  }
}

export default Inputbar
