import { useState, useMemo } from 'react'
import debounce from 'lodash.debounce'
import { useSelector } from 'react-redux'
import { inputValue } from '../redux/slices/input/selectors'
import useActions from './useActions'

const useInputValue2 = () => {
  // const [value, setValue] = useState('')
  const { setInputValue } = useActions()
  const value = useSelector(inputValue)

  // const onChange = useMemo(
  //   () =>
  //     debounce((e) => {
  //       setValue(e.target.value)
  //     }, 150),
  //   [setValue]
  // )

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  return { value, onChange }
}

export default useInputValue2
