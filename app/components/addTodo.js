import React from 'react';
import ReactDOM from 'react-dom';

import appStore from '../stores/app'
import { getVisibleTodos } from '../reducers/visibilityFilter'

let nextTodoId = 0
class  AddTodo extends React.Component {
  render() {
    const visibleTodos = getVisibleTodos(
      this.props.todos,
      this.props.visibilityFilter
    )
    
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
        <ul>
          {visibleTodos.map(t =>
            <li key={t.id}
              onClick={() => {
                appStore.dispatch({
                  type:'TOGGLE_TODO',
                  id: t.id
                })
              }}
              style={{
                textDecoration:
                t.completed ?
                  'line-through' :
                  'none'
              }}>
              {t.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default AddTodo
