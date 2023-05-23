import './App.scss'

import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/layout/Header/Header'
import MobileMenu from './components/MobileMenu/MobileMenu'
import Footer from './components/layout/Footer/Footer'
import Categories from './components/Categories/Categories'
import getSneakersWithCategory from './utils/getSneakersWithCategory'
import useActions from './hooks/useActions'

import { useSelector } from 'react-redux'
import { categories } from './redux/slices/categories/selectors'
import { cart } from './redux/slices/cart/selectors'

function App() {
  const [open, setOpen] = useState(false)
  const { fetchSneakers } = useActions()
  const { shoesType, sex, brand } = useSelector(categories)
  const { cartData } = useSelector(cart)
  let isMounted = useRef(false)

  useEffect(() => {
    const bodyStyle = document.querySelector('body').style
    if (open) {
      bodyStyle.overflow = 'hidden'
    } else {
      bodyStyle.overflow = 'scroll'
    }
  }, [open])

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

  return (
    <div className='wrapper'>
      <MobileMenu
        onChangeOpen={onChangeOpen}
        open={open}
      />
      <>
        <Header onChangeOpen={onChangeOpen} />
        <Categories />
        <Outlet />
        <Footer />
      </>
    </div>
  )
}

export default App
