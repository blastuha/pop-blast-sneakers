import { useEffect, useMemo, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import { inputValue } from '../redux/slices/input/selectors'
import useActions from './useActions'
import useWidth from './useWidth'
import debounce from 'lodash.debounce'

const useInputValue2 = () => {
  const inputRef = useRef(null)
  const { setInputValue } = useActions()
  const value = useSelector(inputValue)
  const width = useWidth()

  console.log(inputRef)

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
  }, [onChange, width, inputRef])

  return { value, inputRef, clearInput }
}

export default useInputValue2
