export interface ITodo {
  id: number
  name: string
  description: string
  isDone: boolean
}

export enum TodoFilterTypes {
  justDoneTasks = 'justDoneTasks',
  justUndoneTasks = 'justUndoneTasks',
  allTasks = 'allTasks'
}

export interface ITodosState {
  loading: boolean
  data: ITodo[]
  filterType: TodoFilterTypes
}

export * from './action-types'
