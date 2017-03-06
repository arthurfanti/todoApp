import React from 'react'
import TodoList from '../components/todoList'
import { getVisibleTodos } from '../reducers/visibilityFilter'
import appStore from '../stores/app'

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.unsubscribe = appStore.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { todos, visibilityFilter } = appStore.getState()
    const visibleTodos = getVisibleTodos(todos, visibilityFilter)

    return (
      <TodoList todos={visibleTodos}
        onTodoClick={id =>
          appStore.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
    )
  }
 }

 export default VisibleTodoList
