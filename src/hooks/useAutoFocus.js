import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { searchWindow } from '../redux/slices/mobileMenu/selectors'
import { mobileMenu } from '../redux/slices/mobileMenu/selectors'

const useAutoFocus = () => {
  const isSearchWindowOpen = useSelector(searchWindow)
  const isMobileMenuOpen = useSelector(mobileMenu).mobileMenuOpen
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef, isSearchWindowOpen, isMobileMenuOpen])

  return inputRef
}

export default useAutoFocus
