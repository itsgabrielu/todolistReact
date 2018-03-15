import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Inputbar from './components/input_bar';
import { createStore } from 'redux';
import todoApp from './reducers/index';

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Container = () => {
  return (
    <Provider store={store}>
      <Inputbar />
    </Provider>
  )
}

ReactDOM.render(<Container />, document.getElementById('root'))
