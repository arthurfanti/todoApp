import {  combineReducers } from 'redux'

import todosReducer from './todos'
import visibilityFilterReducer from './visibilityFilter'

const todoApp = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})

export default todoApp
