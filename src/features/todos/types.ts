export interface ITodo {
  timestamp: number
  name: string
  description: string
  isDone: boolean
  doneTimestamp?: number
}

export enum TodoFilterTypes {
  justDoneTasks = 'justDoneTasks',
  justUndoneTasks = 'justUndoneTasks',
  allTasks = 'allTasks'
}

// Do not use this in production
// because its internationalization case
type ITodoFitlerTypesTranslates = {
  [key in TodoFilterTypes]: string
}

export const TodoFilterTypesTranslates: ITodoFitlerTypesTranslates = {
  allTasks: 'Все задачи',
  justDoneTasks: 'Только выполненные',
  justUndoneTasks: 'Только невыполненные'
}
// End of the "Do not use it in production"

export interface ITodosState {
  loading: boolean
  data: ITodo[]
  filterType: TodoFilterTypes
}

export * from './action-types'
