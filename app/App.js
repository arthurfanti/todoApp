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

let nextTodoId = 0
const HelloReact = () => {
  const { todos, visibilityFilter } = appStore.getState()
  const visibleTodos = getVisibleTodos(todos, visibilityFilter)

  return (
    <div>
      <AddTodo onAddClick={text =>
        appStore.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text

        })
      } />
      <TodoList todos={visibleTodos}
        onTodoClick={id =>
          appStore.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
      <Footer visibilityFilter={visibilityFilter}
        onFilterClick={filter =>
          appStore.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          })
        }
      />
    </div>
  )
}

appStore.subscribe(render)
render()
