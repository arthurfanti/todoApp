let nextTodoId = 0
export const addTodoAction = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
