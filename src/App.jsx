import React, { useEffect, useRef, useState } from 'react'
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
import { useLocalStorage } from './hooks/useLocalStorage'

import { useSelector } from 'react-redux'
import { categories } from './redux/slices/categories/selectors'
import { cart } from './redux/slices/cart/selectors'
import { mobileMenu } from './redux/slices/mobileMenu/selectors'

import { favouritesData } from './redux/slices/favourites/selectors'

import './App.scss'

function App() {
  const { mobileMenuOpen, searchWindowOpen } = useSelector(mobileMenu)
  const { fetchSneakers } = useActions()
  const { shoesType, sex, brand } = useSelector(categories)
  const { cartData } = useSelector(cart)
  const favourites = useSelector(favouritesData)
  const width = useWidth()

  const {} = useLocalStorage('cartItems', cartData)
  const {} = useLocalStorage('favouritesData', favourites)

  // let isMounted = useRef(false)

  useEffect(() => {
    const bodyStyle = document.querySelector('body').style
    if (mobileMenuOpen || searchWindowOpen) {
      bodyStyle.overflow = 'hidden'
    } else {
      bodyStyle.overflow = 'scroll'
    }
  }, [mobileMenuOpen, searchWindowOpen])

  useEffect(() => {
    getSneakersWithCategory(brand, shoesType, sex, fetchSneakers)
  }, [brand, shoesType, sex, fetchSneakers])

  // useEffect(() => {
  //   if (isMounted.current) {
  //     const json = JSON.stringify(cartData)
  //     localStorage.setItem('cartItems', json)
  //   }
  //   isMounted.current = true
  // }, [cartData])

  //* дублирование - убрать
  // useEffect(() => {
  //   if (isMounted.current) {
  //     const json = JSON.stringify(favourites)
  //     localStorage.setItem('favouritesData', json)
  //   }
  //   isMounted.current = true
  // }, [favourites])

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
