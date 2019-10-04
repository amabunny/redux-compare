import { TodoFilterTypes, ITodosState, TTodosActions } from '../types'

const initialState: ITodosState = {
  loading: false,
  data: [],
  filterType: TodoFilterTypes.allTasks
}

export const todosReducer = (state = initialState, action: TTodosActions): ITodosState => {
  switch (action.type) {
    case 'LOAD_TASKS':
      return {
        ...state,
        loading: true
      }

    case 'LOAD_TASKS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.data
      }

    case 'LOAD_TASKS_NOT_FOUND':
      return {
        ...state,
        loading: false
      }

    case 'ADD_TASK':
      return {
        ...state,
        data: [
          ...state.data,
          action.data
        ]
      }

    case 'DELETE_TASK':
      return {
        ...state,
        data: state.data.filter(task => task.timestamp !== action.taskId)
      }

    case 'CHANGE_FILTER_TYPE':
      return {
        ...state,
        filterType: action.filterType
      }

    case 'TOGGLE_TODO_DONE':
      return {
        ...state,
        data: state.data.map(todo => {
          if (todo.timestamp === action.todoTimestamp) {
            return {
              ...todo,
              isDone: action.flag,
              doneTimestamp: action.doneTimestamp
            }
          }

          return todo
        })
      }

    default:
      return state
  }
}
