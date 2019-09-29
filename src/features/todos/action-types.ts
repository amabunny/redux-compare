import { Action } from 'redux'
import { ITodo, TodoFilterTypes } from './types'

export interface ILoadTasksAction extends Action {
  type: 'LOAD_TASKS'
}

export interface ILoadTasksSuccessAction extends Action {
  type: 'LOAD_TASKS_SUCCESS'
  data: ITodo[]
}

export interface ILoadTasksErrorAction extends Action {
  type: 'LOAD_TASKS_NOT_FOUND'
}

export interface IAddTaskAction extends Action {
  type: 'ADD_TASK',
  data: ITodo
}

export interface IDeleteTaskAction extends Action {
  type: 'DELETE_TASK'
  taskId: number
}

export interface IChangeFilterTypesAction extends Action {
  type: 'CHANGE_FILTER_TYPE'
  filterType: TodoFilterTypes
}

export interface IToggleTodoDoneAction extends Action {
  type: 'TOGGLE_TODO_DONE_ACTION'
  flag: boolean
  todoId: number
  doneTimestamp?: number
}

export type TTodosActions =
  | ILoadTasksAction
  | ILoadTasksSuccessAction
  | ILoadTasksErrorAction
  | IAddTaskAction
  | IDeleteTaskAction
  | IChangeFilterTypesAction
  | IToggleTodoDoneAction
