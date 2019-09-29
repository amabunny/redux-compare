import { TOwnMiddleware } from 'features/store'

export const todosMiddleware: TOwnMiddleware = ({ getState }) => (next) => (action) => {
  if (
    action.type === 'ADD_TASK' ||
    action.type === 'DELETE_TASK' ||
    action.type === 'TOGGLE_TODO_DONE_ACTION'
  ) {
    next(action)

    const { todos } = getState()
    localStorage.setItem('tasks', JSON.stringify(todos.data))
  } else {
    next(action)
  }
}