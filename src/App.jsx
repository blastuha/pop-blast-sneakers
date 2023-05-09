import './App.scss'

import React, { useEffect, useRef, useCallback } from 'react'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Categories from './components/Categories/Categories'

import { useSelector, useDispatch } from 'react-redux'
import { fetchSneakers } from './redux/slices/sneakersSlice'

import { Outlet } from 'react-router-dom'

function App() {
  const cartData = useSelector((state) => state.cart.cartData)
  const shoesType = useSelector((state) => state.categories.shoesType)
  const sex = useSelector((state) => state.categories.sex)
  const brand = useSelector((state) => state.categories.brand)
  const dispatch = useDispatch()

  const getSneakers = useCallback(() => {
    const brandFilter = `${brand ? `&title=${brand}` : ''}`
    const shoesTypeFilter = `${shoesType ? `&filter=${shoesType}` : ''}`
    const sexFilter = `${sex ? `&filter=${sex}` : ''}`

    dispatch(fetchSneakers({ brandFilter, shoesTypeFilter, sexFilter }))
  }, [brand, shoesType, sex, dispatch])

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
  }, [cartData, dispatch])

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
