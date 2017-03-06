import React from 'react'

import appStore from '../stores/app'

let input
let nextTodoId = 0
const AddTodo = () => {
  return (
    <div>
      <input ref={node=> {
        input = node
      }} />
      <button onClick={() => {
        appStore.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text: input.value
        })
        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

export default AddTodo
