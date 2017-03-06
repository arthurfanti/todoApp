import React from 'react'
import ReactDOM from 'react-dom'

import appStore from '../stores/app'

let nextTodoId = 0
class  AddTodo extends React.Component {
  render() {
    return (
      <div>
        <input ref={node=> {
          this.input = node
        }} />
        <button onClick={() => {
          appStore.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          })
          this.input.value = ''
        }}>
          Add Todo
        </button>
      </div>
    )
  }
}

export default AddTodo
