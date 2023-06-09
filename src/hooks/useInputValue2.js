import { useState } from 'react'
import { useSelector } from 'react-redux'
import { globalValue } from '../redux/slices/input/selectors'
import useActions from './useActions'
import useDebounce from './useDebounce'

const useInputValue2 = () => {
  const [value, setValue] = useState('')
  const globalInputValue = useSelector(globalValue)
  const { setGlobalInputValue } = useActions()
  const updateGlobalInputValue = useDebounce((value) => {
    setGlobalInputValue(value)
  }, 200)

  // const updateGlobalInputValue = useMemo(
  //   () =>
  //     debounce((value) => {
  //       setGlobalInputValue(value)
  //     }, 1000),
  //   [setGlobalInputValue]
  // )

  const onChange = (e) => {
    setValue(e.target.value)
    updateGlobalInputValue(e.target.value)
  }

  return { value, onChange, globalInputValue }
}

export default useInputValue2
