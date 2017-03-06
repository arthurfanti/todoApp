import React from 'react'
import { connect } from 'react-redux'

import { addTodoAction } from '../actions/addTodo'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <input ref={node=> {
        input = node
      }} />
      <button onClick={() => {
        dispatch(addTodoAction(input.value))
        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

export default AddTodo = connect()(AddTodo)
