import { useEffect, useRef } from 'react'

const useOutsideOverlayClick = (closeModal) => {
  const ref = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        closeModal()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, closeModal])

  return ref
}

export default useOutsideOverlayClick
