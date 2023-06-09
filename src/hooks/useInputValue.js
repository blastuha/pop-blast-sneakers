import { useEffect, useRef, useMemo, useCallback } from 'react'
import { useSelector } from 'react-redux'
// import { inputValue } from '../redux/slices/input/selectors'
import useActions from './useActions'
import useWidth from './useWidth'
import debounce from 'lodash.debounce'

const useInputValue = () => {
  const { setInputValue } = useActions()
  // const value = useSelector(inputValue)
  const inputRef = useRef(null)
  const width = useWidth()

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
    return () => inputCurrent?.removeEventListener('keyup', onChange)
  }, [onChange, width, inputRef])

  // return { value, inputRef }
}

export default useInputValue
