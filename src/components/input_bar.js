import React, { Component } from 'react';

import TaskList from './task_list';

class Inputbar extends Component {
  constructor(props) {
    super(props);
    this.state={
      inputText: '',
      All: [],
      status: 'all'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.showComplete = this.showComplete.bind(this);
    this.showPending = this.showPending.bind(this);
    this.showAll = this.showAll.bind(this);
  }
  handleChange(e) {
    this.setState({
      inputText: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let newAll = [...this.state.All, {item:this.state.inputText,status:true}];
    this.setState({
      inputText: '',
      All: newAll
    });
  }
  handleDelete(e) {
    const deleteIndex = e.target.id;
    let newAll = this.state.All.slice(0);
    newAll.splice(deleteIndex, 1);
    this.setState({
      All: newAll
    });
  }
  handleCheck(e) {
    let toggleIndex = e.target.id;
    console.log(e.target)
    let newAll = this.state.All.slice(0);
    newAll[toggleIndex].status = !newAll[toggleIndex].status;
    this.setState({
      All: newAll
    });
  }
  showPending() {
    this.setState({
      status: 'pending'
    })
  }
  showComplete() {
    this.setState({
      status: 'complete'
    })
  }
  showAll() {
    this.setState({
      status: 'all'
    })
  }

  renderItems(status) {
    switch (status) {
      case 'all':
          return this.state.All
      case 'pending':
          return this.state.All.filter(
            (el) => (el.status)
          )
      case 'complete':
          return this.state.All.filter(
            (el) => (!el.status)
          )
      default: 'all'
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.inputText} onChange={this.handleChange} placeholder='Do your homework.' />
          <button />
        </form> 
        <ul>
          <TaskList
            list={this.renderItems(this.state.status)}
            handleDelete={this.handleDelete}
            handleCheck={this.handleCheck}
            showComplete={this.showComplete}
            showPending={this.showPending}
            showAll={this.showAll}
          />
        </ul>
      </div>
    )
  }
};

export default Inputbar;
