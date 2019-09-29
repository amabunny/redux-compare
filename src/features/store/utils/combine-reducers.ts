import { combineReducers as combineReduxReducers } from 'redux'
import { todosReducer } from 'features/todos'

export const combineReducers = () => combineReduxReducers({
  todos: todosReducer
})