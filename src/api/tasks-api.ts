import { ITodo } from 'features/todos'

const DEFAULT_TASKS_PROMISE_MS_DELAY = 1000

const load = () => new Promise<ITodo[]>((resolve, reject) => {
  const tasks = localStorage.getItem('tasks')

  setTimeout(() => {
    if (tasks) {
      resolve(JSON.parse(tasks))
    } else {
      reject(tasks)
    }
  }, DEFAULT_TASKS_PROMISE_MS_DELAY)
})

const save = (todos: ITodo[]) => {
  localStorage.setItem('tasks', JSON.stringify(todos))
}

export const tasksApi = {
  load,
  save
}
