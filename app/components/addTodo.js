import React from 'react'

import appStore from '../stores/app'

let input
const AddTodo = ({ onAddClick }) => {
  return (
    <div>
      <input ref={node=> {
        input = node
      }} />
      <button onClick={() => {
        onAddClick(input.value)
        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

export default AddTodo
