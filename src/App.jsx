import './App.scss'

import React, { useEffect, useRef, useCallback } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Categories from './components/Categories/Categories'

import { useSelector } from 'react-redux'
import { categories } from './redux/slices/categories/selectors'
import { cart } from './redux/slices/cart/selectors'
import useActions from './hooks/useActions'

function App() {
  const { fetchSneakers } = useActions()
  const { shoesType, sex, brand, cartData } = useSelector(categories, cart)

  const getSneakers = useCallback(async () => {
    const brandFilter = `${brand ? `&title=${brand}` : ''}`
    const shoesTypeFilter = `${shoesType ? `&filter=${shoesType}` : ''}`
    const sexFilter = `${sex ? `&filter=${sex}` : ''}`

    fetchSneakers({ brandFilter, shoesTypeFilter, sexFilter })
  }, [brand, shoesType, sex, fetchSneakers])

  useEffect(() => {
    getSneakers()
  }, [brand, shoesType, sex, getSneakers])

  let isMounted = useRef(false)

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
