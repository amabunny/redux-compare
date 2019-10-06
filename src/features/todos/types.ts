export interface ITodo {
  timestamp: number
  name: string
  description?: string
  isDone: boolean
  doneTimestamp?: number
}

export enum TodoFilterTypes {
  allTasks = 'allTasks',
  justDoneTasks = 'justDoneTasks',
  justUndoneTasks = 'justUndoneTasks'
}

// Do not use this in production
// because its internationalization case
type ITodoFilterTypesTranslates = {
  [key in TodoFilterTypes]: string
}

export const TodoFilterTypesTranslates: ITodoFilterTypesTranslates = {
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

export * from './store/action-types'
