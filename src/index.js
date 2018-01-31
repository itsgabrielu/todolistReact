import React from 'react'
import ReactDOM from 'react-dom'

import InputBar from './components/task_input_bar.js'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hi: 'what'
    }
  }
  render() {
    return (
          <div>
            <h1> Things To Do </h1>
            <p> Hi! My name is Gabriel </p>
            <InputBar />
           </div>
            )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
