import { ThunkAction } from 'redux-thunk'
import { TDispatchableActions } from 'features/store'
import { IAddTaskAction, ITodo } from '../types'
import { tasksApi } from 'api'

export const loadTasks = (): ThunkAction<Promise<void>, {}, {}, TDispatchableActions> => dispatch => {
  dispatch({ type: 'LOAD_TASKS' })

  return tasksApi().then(
    data => {
      dispatch({ type: 'LOAD_TASKS_SUCCESS', data })
    },
    error => {
      dispatch({ type: 'LOAD_TASKS_NOT_FOUND' })
    }
  )
}

export const addTask = (data: ITodo): IAddTaskAction => ({
  type: 'ADD_TASK',
  data
})
