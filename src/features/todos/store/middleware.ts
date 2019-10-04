import { TOwnMiddleware } from 'features/store'
import { tasksApi } from 'api'

export const todosMiddleware: TOwnMiddleware = ({ getState }) => (next) => (action) => {
  if (
    action.type === 'ADD_TASK' ||
    action.type === 'DELETE_TASK' ||
    action.type === 'TOGGLE_TODO_DONE'
  ) {
    next(action)

    const { todos } = getState()
    tasksApi.save(todos.data)
  } else {
    next(action)
  }
}