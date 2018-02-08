import React from 'react';

class Inputbar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      inputText: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(e)
  }
  handleChange(e) {
    this.setState({
      inputText: e.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.inputText} onChange={this.handleChange} placeholder='Do my homework.' />
        <button />
      </form>
    )
  }
}

export default Inputbar;
