import { ThunkAction } from "redux-thunk";
import { TDispatchableActions } from "features/store";
import {
  IAddTaskAction,
  ITodo,
  IDeleteTaskAction,
  IChangeFilterTypesAction,
  TodoFilterTypes,
  IToggleTodoDoneAction
} from "../types";
import { tasksApi } from "api";

export const loadTasksThunk = (): ThunkAction<
  Promise<void>,
  {},
  {},
  TDispatchableActions
> => dispatch => {
  dispatch({ type: "LOAD_TASKS" })

  return tasksApi().then(
    data => {
      dispatch({ type: "LOAD_TASKS_SUCCESS", data })
    },
    () => {
      dispatch({ type: "LOAD_TASKS_NOT_FOUND" })
    }
  )
}

export const addTask = (data: ITodo): IAddTaskAction => ({
  type: "ADD_TASK",
  data
})

export const addTaskThunk = (
  name: string,
  description: string
): ThunkAction<void, {}, {}, TDispatchableActions> => dispatch => {
  dispatch(
    addTask({
      name,
      description,
      isDone: false,
      timestamp: new Date().getTime()
    })
  )
}

export const deleteTask = (taskId: number): IDeleteTaskAction => ({
  type: "DELETE_TASK",
  taskId
})

export const changeFilterType = (
  filterType: TodoFilterTypes
): IChangeFilterTypesAction => ({
  type: "CHANGE_FILTER_TYPE",
  filterType
})

export const toggleTodoDone = (
  todoId: number,
  flag: boolean,
  doneTimestamp?: number
): IToggleTodoDoneAction => ({
  type: "TOGGLE_TODO_DONE_ACTION",
  todoId,
  flag,
  doneTimestamp
})

export const toggleTodoDoneThunk = (
  todoId: number,
  flag: boolean
): ThunkAction<void, {}, {}, TDispatchableActions> => dispatch => {
  const doneTimestamp = flag
    ? new Date().getTime()
    : undefined

  dispatch(toggleTodoDone(todoId, flag, doneTimestamp))
}
