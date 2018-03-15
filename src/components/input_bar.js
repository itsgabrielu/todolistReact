import React, { Component } from 'react';

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
          console.log(input.value.trim())
          if (input.value.trim()) {
            dispatch(addTodo(input.value.trim()))
          }
          else return
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

let selectedValue = ''

class Iputbar extends Component {
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
    selectedValue = e.target.value;
    let newAll = this.state.All.slice(0);
    let selectedIndex = newAll.findIndex(this.findvalue);

    newAll.splice(selectedIndex, 1);

    this.setState({
      All: newAll
    });
  }
  findvalue(e) {
    return e.item === selectedValue
  }
  handleCheck(e) {
    selectedValue = e.target.value;
    let newAll = this.state.All.slice(0);
    let selectedIndex = newAll.findIndex(this.findvalue);

    newAll[selectedIndex].status = !newAll[selectedIndex].status;

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
      default:
        return this.state.All
    }
  }

  render() {
    return (
      <div>
        <h1> My Todo </h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.inputText} onChange={this.handleChange} placeholder='Do your homework.' />
          <button />
        </form>
        <ol>
        </ol>
      </div>
    )
  }
};

export default connect()(Inputbar);
