import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { mobileMenu } from '../redux/slices/mobileMenu/selectors'
import { filterSort } from '../redux/slices/filter&Sort/selectors'

// убирает body скролл, если открыты окна бургер мобильного меню, мобильного поиска, мобильные фильтры

const useHideBodyScroll = () => {
  const { mobileMenuOpen, searchWindowOpen } = useSelector(mobileMenu)
  const { filterWindowOpen } = useSelector(filterSort)

  useEffect(() => {
    const bodyStyle = document.body.style
    if (mobileMenuOpen || searchWindowOpen || filterWindowOpen) {
      bodyStyle.overflow = 'hidden'
    } else {
      bodyStyle.overflow = 'scroll'
    }
  }, [mobileMenuOpen, searchWindowOpen, filterWindowOpen])
}

export default useHideBodyScroll
