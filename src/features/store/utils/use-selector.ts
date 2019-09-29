import { useSelector as useReduxSelector } from 'react-redux'
import { IState } from '../types'

export function useSelector <Result, State = IState>
  (selector: (state: State) => Result): Result
{
  return useReduxSelector(selector)
}
