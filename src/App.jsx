import './App.scss'

import React, { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Categories from './components/Categories/Categories'
import getSneakersWithCategory from './utils/getSneakersWithCategory'
import useActions from './hooks/useActions'

import { useSelector } from 'react-redux'
import { categories } from './redux/slices/categories/selectors'
import { cart } from './redux/slices/cart/selectors'

function App() {
  const { fetchSneakers } = useActions()
  const { shoesType, sex, brand } = useSelector(categories)
  const { cartData } = useSelector(cart)
  let isMounted = useRef(false)

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

  return (
    <div className='wrapper'>
      <Header />
      <Categories />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
