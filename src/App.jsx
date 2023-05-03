import './App.scss'

import React, { useEffect, useState, useRef, useCallback } from 'react'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Categories from './components/Categories/Categories'

import { useSelector, useDispatch } from 'react-redux'
import { fetchSneakers } from './redux/slices/sneakersSlice'

import { brands } from './data'
import { types } from './data'
import { sexArray } from './data'

import { Outlet } from 'react-router-dom'

export const appContext = React.createContext('')

function App() {
  const [brand, setBrand] = useState('')
  const [shoesType, setShoesType] = useState('')
  const [sex, setSex] = useState('')

  const dispatch = useDispatch()
  const sneakers = useSelector((state) => state.sneakers.sneakers)
  const cartData = useSelector((state) => state.cart.cartData)

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

  const onChangeBrand = (brandData) => {
    brands.forEach((brandItem) => {
      if (brandData === brandItem) {
        setShoesType('')
        setSex('')
        setBrand(brandData)
      }
    })
  }

  const onChangeShoesType = (typeData) => {
    types.forEach((typeItem) => {
      if (typeItem === typeData) {
        setBrand('')
        setSex('')
        setShoesType(typeData)
      }
    })
  }

  const onChangeSex = (sexData) => {
    sexArray.forEach((sexItem) => {
      if (sexItem === sexData) {
        setBrand('')
        setShoesType('')
        setSex(sexData)
      }
    })
  }

  const clearAllFilters = () => {
    setBrand('')
    setShoesType('')
    setSex('')
  }

  return (
    <div className='wrapper'>
      <appContext.Provider
        value={{
          sneakers,
          brand,
          shoesType,
          sex,
          onChangeBrand,
          onChangeShoesType,
          onChangeSex,
          clearAllFilters,
        }}
      >
        <Header />
        <Categories
          onChangeBrand={onChangeBrand}
          onChangeShoesType={onChangeShoesType}
          onChangeSex={onChangeSex}
        />
        <Outlet />
        <Footer />
      </appContext.Provider>
    </div>
  )
}

export default App
