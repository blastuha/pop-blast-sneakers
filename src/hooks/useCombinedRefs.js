import { useCallback } from 'react'

const useCombinedRefs = (...refs) => {
  const cbFunc = useCallback((el) => {
    refs.forEach((ref) => {
      if (!ref) return
      ref.current = el
    })
  }, refs)

  return cbFunc
}

export default useCombinedRefs
