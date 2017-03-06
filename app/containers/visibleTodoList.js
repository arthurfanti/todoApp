import React from 'react'
import { connect } from 'react-redux'

import TodoList from '../components/todoList'
import { getVisibleTodos } from '../reducers/visibilityFilter'

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch({
        type: 'TOGGLE_TODO',
        id
      })
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

// class VisibleTodoList extends React.Component {
//   componentDidMount() {
//     this.unsubscribe = appStore.subscribe(() => this.forceUpdate())
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe()
//   }
//
//   render() {
//     const { todos, visibilityFilter } = appStore.getState()
//     const visibleTodos = getVisibleTodos(todos, visibilityFilter)
//
//     return (
//       <TodoList todos={visibleTodos}
//         onTodoClick={id =>
//           appStore.dispatch({
//             type: 'TOGGLE_TODO',
//             id
//           })
//         }
//       />
//     )
//   }
//  }

 export default VisibleTodoList
