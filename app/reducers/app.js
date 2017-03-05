import todosReducer from './todos'
import visibilityFilterReducer from './visibilityFilter'

const todoApp (state = {}, action) => {
  return {
    todos: todosReducer(
      state.todos,
      action
    ),
    visibilityFilter: visibilityFilterReducer(
      state.visibilityFilter,
      action
    )
  }
}

export default todoApp
