import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import appStore from './stores/app'

import AddTodo from './components/addTodo'

const render = () => {
  ReactDOM.render(
    <HelloReact />,
    document.getElementById('app')
  )
}

const HelloReact = () => {
  return (
    <AddTodo todos={appStore.getState().todos} />
  )
}

appStore.subscribe(render)
render()
