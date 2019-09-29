import { ThunkDispatch } from 'redux-thunk'
import { MiddlewareAPI, Dispatch as ReduxDispatch } from 'redux'
import { TTodosActions, ITodosState } from 'features/todos'

export type TDispatchableActions = TTodosActions

export interface IState {
  todos: ITodosState
}

export type TOwnThunkDispatch = ThunkDispatch<
  IState,
  {},
  TDispatchableActions
>

export type TOwnMiddleware<
  DispatchExt = {},
  State = IState,
  Dispatch extends ReduxDispatch = TOwnThunkDispatch
> =
  (api: MiddlewareAPI<Dispatch, State>) =>
  (next: TOwnThunkDispatch) =>
  (action: TDispatchableActions) =>
  any
