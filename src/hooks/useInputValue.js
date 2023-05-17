import { useEffect, useRef, useCallback } from 'react'
import debounce from 'lodash.debounce'
import { useSelector } from 'react-redux'
import { inputValue } from '../redux/slices/input/selectors'
import useActions from './useActions'

const useInputValue = () => {
  const { setInputValue } = useActions()
  const value = useSelector(inputValue)
  const inputRef = useRef()
  console.log(value)

  const onChange = useCallback(
    debounce((e) => {
      setInputValue(e.target.value)
    }, 150),
    []
  )

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('keyup', onChange)
    }
    return () => inputRef.current.removeEventListener('keyup', onChange)
  }, [onChange])

  return { value, inputRef }
}

export default useInputValue
