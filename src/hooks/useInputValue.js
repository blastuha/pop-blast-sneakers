import { useEffect, useRef, useMemo, useCallback } from 'react'
import debounce from 'lodash.debounce'
import { useSelector } from 'react-redux'
import { inputValue } from '../redux/slices/input/selectors'
import useActions from './useActions'
import useWidth from './useWidth'

const useInputValue = () => {
  const { setInputValue } = useActions()
  const value = useSelector(inputValue)
  const inputRef = useRef()
  const width = useWidth()

  const onChange = useMemo(
    () =>
      debounce((e) => {
        setInputValue(e.target.value)
      }, 150),
    [setInputValue]
  )

  const clearInput = useCallback(() => {
    if (width <= 767) {
      setInputValue('')
    }
  }, [setInputValue, width])

  useEffect(() => {
    clearInput()
  }, [width, clearInput])

  useEffect(() => {
    const inputCurrent = inputRef.current

    if (inputCurrent) {
      inputCurrent.addEventListener('keyup', onChange)
    }
    return () => inputCurrent?.removeEventListener('keyup', onChange)
  }, [onChange])

  return { value, inputRef, clearInput }
}

export default useInputValue
