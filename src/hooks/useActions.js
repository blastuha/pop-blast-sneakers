import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../redux/slices'
// import { fetchSneakers } from '../redux/slices/sneakers/asyncActions'

const rootActions = {
  ...actions,
  // fetchSneakers,
}

console.log(rootActions)
const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions
