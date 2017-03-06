import React from 'react';
import ReactDOM from 'react-dom';

import appStore from './stores/app'
import { getVisibleTodos } from './reducers/visibilityFilter'

import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import Footer from './components/footer'

const render = () => {
  ReactDOM.render(
    <HelloReact />,
    document.getElementById('app')
  )
}

const HelloReact = () => {
  const visibleTodos = getVisibleTodos(
    appStore.getState().todos,
    appStore.getState().visibilityFilter
  )

  return (
    <div>
      <AddTodo />
      <TodoList todos={visibleTodos}
        onTodoClick={id =>
          appStore.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
      <Footer />
    </div>
  )
}

appStore.subscribe(render)
render()
