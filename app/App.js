import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import todoApp from './reducers/app';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const store = createStore(todoApp)

const HelloReact = () => {
  store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'grounding'
  })
  console.log('state:',store.getState())

  return (
    <MuiThemeProvider>
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    </MuiThemeProvider>
  )
}

ReactDOM.render(<HelloReact />, document.getElementById('app'))
