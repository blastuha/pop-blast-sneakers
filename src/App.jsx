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
import { filterSort } from './redux/slices/filter&Sort/selectors'

import useHideBodyScroll from './hooks/useHideBodyScroll'

import './App.scss'

function App() {
  const { filtredValue, sortValue } = useSelector(filterSort)
  const { fetchSneakers } = useActions()
  const width = useWidth()

  useHideBodyScroll()

  useEffect(() => {
    getSneakersWithCategory(filtredValue, fetchSneakers, sortValue)
  }, [filtredValue, fetchSneakers, sortValue])

  return (
    <div className='wrapper'>
      <MobileBottomSearch />
      <MobileMenu />
      <Header />
      <Categories />
      <Outlet />
      {width > 767 && <Footer />}
      {width < 767 && <MobileBottom />}
    </div>
  )
}

export default App
