import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/layout/Header/Header'
import MobileMenu from './components/MobileMenu/MobileMenu'
import MobileBottom from './components/MobileBottom/MobileBottom'
import MobileBottomSearch from './components/MobileBottomSearch/MobileBottomSearch'
import Footer from './components/layout/Footer/Footer'
import Categories from './components/Categories/Categories'
import getSneakersWithCategory from './utils/getSneakersWithCategory'

import useActions from './hooks/useActions'
import useWidth from './hooks/useWidth'

import { useSelector } from 'react-redux'
import { categories } from './redux/slices/categories/selectors'
import { mobileMenu } from './redux/slices/mobileMenu/selectors'

import './App.scss'

function App() {
  const { mobileMenuOpen, searchWindowOpen, filterWindowOpen } =
    useSelector(mobileMenu)
  const { fetchSneakers } = useActions()
  const { filtredValue, sortValue } = useSelector(categories)
  const width = useWidth()

  // убирает скролл, если открыты окна бургер мобильного меню, мобильного поиска, мобильные фильтры
  useEffect(() => {
    const bodyStyle = document.querySelector('body').style
    if (mobileMenuOpen || searchWindowOpen || filterWindowOpen) {
      bodyStyle.overflow = 'hidden'
    } else {
      bodyStyle.overflow = 'scroll'
    }
  }, [mobileMenuOpen, searchWindowOpen, filterWindowOpen])

  useEffect(() => {
    getSneakersWithCategory(filtredValue, fetchSneakers, sortValue)
  }, [filtredValue, fetchSneakers, sortValue])

  return (
    <div className='wrapper'>
      <MobileBottomSearch searchWindowOpen={searchWindowOpen} />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
      <Header />
      <Categories />
      <Outlet />
      {width > 767 && <Footer />}
      {width < 767 && <MobileBottom />}
    </div>
  )
}

export default App
