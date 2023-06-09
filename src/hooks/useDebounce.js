import { useMemo } from 'react'
import debounce from 'lodash.debounce'

const useDebounce = (cb, time) => {
  return useMemo(() => debounce(cb, time), [cb, time])
}

export default useDebounce
