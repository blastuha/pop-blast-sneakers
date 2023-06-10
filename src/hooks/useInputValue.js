import { useState } from 'react'
import { useSelector } from 'react-redux'
import { globalValue } from '../redux/slices/input/selectors'
import useActions from './useActions'
import useDebounce from './useDebounce'

const useInputValue = () => {
  const [value, setValue] = useState('')
  const globalInputValue = useSelector(globalValue)
  const { setGlobalInputValue } = useActions()
  const updateGlobalInputValue = useDebounce((value) => {
    setGlobalInputValue(value)
  }, 250)

  const onChange = (e) => {
    setValue(e.target.value)
    updateGlobalInputValue(value)
  }

  return { value, onChange, globalInputValue }
}

export default useInputValue
