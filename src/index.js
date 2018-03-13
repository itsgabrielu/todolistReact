import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Inputbar from './components/input_bar';

const Container = () => {
  return(
    <div>
      <h1> My Todo </h1>
      <Inputbar />
    </div>
  )
}

ReactDOM.render(<Container />, document.getElementById('root'))
