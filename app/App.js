import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import appStore from './stores/app'

import AddTodo from './components/addTodo'
import Footer from './components/footer'

const render = () => {
  ReactDOM.render(
    <HelloReact />,
    document.getElementById('app')
  )
}

const HelloReact = () => {
  return (
    <MuiThemeProvider>
      <div>
        <AddTodo
          todos={appStore.getState().todos}
          visibilityFilter={appStore.getState().visibilityFilter}
        />
        <Footer />
      </div>
    </MuiThemeProvider>
  )
}

appStore.subscribe(render)
render()
