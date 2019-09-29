import { ITodo } from 'features/todos'

const DEFAULT_TASKS_PROMISE_MS_DELAY = 1000

export const tasksApi = () => new Promise<ITodo[]>((resolve, reject) => {
  const tasks = localStorage.getItem('tasks')

  setTimeout(() => {
    if (tasks) {
      resolve(JSON.parse(tasks))
    } else {
      reject(tasks)
    }
  }, DEFAULT_TASKS_PROMISE_MS_DELAY)
})
