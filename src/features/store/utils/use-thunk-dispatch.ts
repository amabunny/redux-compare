import { useDispatch } from 'react-redux'
import { TOwnThunkDispatch } from 'features/store'

export const useThunkDispatch = () => {
  return useDispatch<TOwnThunkDispatch>()
}
