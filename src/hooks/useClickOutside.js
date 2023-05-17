import { useState, useRef, useEffect } from 'react'

const useClickOutside = (initialValue = false) => {
  const [open, setOpen] = useState(initialValue)
  const itemRef = useRef()

  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (!open) {
      return
    }

    window.addEventListener('click', (event) => {
      if (!itemRef.current.contains(event.target)) {
        setOpen(false)
      }
    })
  }, [open])

  return { open, itemRef, handleOpen }
}

export default useClickOutside
