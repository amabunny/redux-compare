import { Action } from 'redux'
import { ITodo } from './types'

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

export type TTodosActions =
  | ILoadTasksAction
  | ILoadTasksSuccessAction
  | ILoadTasksErrorAction
  | IAddTaskAction
