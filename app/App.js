import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import appStore from './stores/app'

import AddTodo from './components/addTodo'
import VisibleTodoList from './containers/visibleTodoList'
import Footer from './components/footer'

const HelloReact = () => {
  return (
    <div>
      <AddTodo  />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <Provider store={appStore}>
    <HelloReact />
  </Provider>,
  document.getElementById('app')
)
