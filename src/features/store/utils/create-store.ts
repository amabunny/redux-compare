import { createStore as createReduxStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from './combine-reducers'
import { todosMiddleware } from 'features/todos'

export const createStore = () => createReduxStore(
  combineReducers(),
  composeWithDevTools(
    applyMiddleware(
      thunk,
      todosMiddleware
    )
  )
)
