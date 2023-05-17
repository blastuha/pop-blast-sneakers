import { useEffect, useRef, useMemo } from 'react'
import debounce from 'lodash.debounce'
import { useSelector } from 'react-redux'
import { inputValue } from '../redux/slices/input/selectors'
import useActions from './useActions'

const useInputValue = () => {
  const { setInputValue } = useActions()
  const value = useSelector(inputValue)
  const inputRef = useRef()

  const onChange = useMemo(
    () =>
      debounce((e) => {
        setInputValue(e.target.value)
      }, 150),
    [setInputValue]
  )

  useEffect(() => {
    const inputCurrent = inputRef.current

    if (inputCurrent) {
      inputCurrent.addEventListener('keyup', onChange)
    }
    return () => inputCurrent.removeEventListener('keyup', onChange)
  }, [onChange])

  return { value, inputRef }
}

export default useInputValue
