import './App.scss'

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

import { useSelector } from 'react-redux'
import { categories } from './redux/slices/categories/selectors'
import { cart } from './redux/slices/cart/selectors'

function App() {
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const [searchWindow, setSearchWindow] = useState(false)

  const { fetchSneakers } = useActions()
  const { shoesType, sex, brand } = useSelector(categories)
  const { cartData } = useSelector(cart)
  let isMounted = useRef(false)

  window.onresize = function (event) {
    setWidth(event.srcElement.innerWidth)
  }

  useEffect(() => {
    const bodyStyle = document.querySelector('body').style
    if (open || searchWindow) {
      bodyStyle.overflow = 'hidden'
    } else {
      bodyStyle.overflow = 'scroll'
    }
  }, [open, searchWindow])

  useEffect(() => {
    getSneakersWithCategory(brand, shoesType, sex, fetchSneakers)
  }, [brand, shoesType, sex, fetchSneakers])

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cartData)
      localStorage.setItem('cartItems', json)
    }
    isMounted.current = true
  }, [cartData])

  const onChangeOpen = () => {
    setOpen(!open)
  }

  const openSearchWindow = () => {
    setSearchWindow(true)
  }

  const closeSearchWindow = () => {
    setSearchWindow(false)
  }

  return (
    <div className='wrapper'>
      <MobileBottomSearch
        closeSearchWindow={closeSearchWindow}
        searchWindow={searchWindow}
      />
      <MobileMenu
        onChangeOpen={onChangeOpen}
        open={open}
      />
      <>
        <Header onChangeOpen={onChangeOpen} />
        <Categories />
        <Outlet />
        <Footer />
        {width < 767 ? (
          <MobileBottom
            openSearchWindow={openSearchWindow}
            closeSearchWindow={closeSearchWindow}
          />
        ) : (
          ''
        )}
      </>
    </div>
  )
}

export default App
