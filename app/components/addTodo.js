import React from 'react';
import ReactDOM from 'react-dom';

import appStore from '../stores/app'

let nextTodoId = 0
const AddTodo = (props) => {
  let { todos, ...rest } = props

  return (
    <div>
      <button onClick={() => {
        appStore.dispatch({
          type: 'ADD_TODO',
          text: 'Test',
          id: nextTodoId++
        })
      }}>
        Add Todo
      </button>
      <ul>
        {todos.map(t =>
          <li key={t.id}>
            {t.text}
          </li>
        )}
      </ul>
    </div>
  )
}

export default AddTodo
