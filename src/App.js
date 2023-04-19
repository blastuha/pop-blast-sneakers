import './App.scss'

import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Categories from './components/Categories/Categories'

import { brands } from './data'
import { types } from './data'
import { sexArray } from './data'
import { Outlet } from 'react-router-dom'

export const categoryList = [
  { name: 'Пол', menu: sexArray },
  { name: 'Тип обуви', menu: types },
  { name: 'Бренды', menu: brands },
]

export const appContext = React.createContext('')

function App() {
  const getStorageItems = () => {
    const data = localStorage.getItem('cartItems')
    return data ? JSON.parse(data) : ''
  }

  const [sneakers, setSneakers] = useState([])
  const [brand, setBrand] = useState('')
  const [shoesType, setShoesType] = useState('')
  const [sex, setSex] = useState('')
  const [cartData, setCartData] = useState(getStorageItems())

  useEffect(() => {
    const brandFilter = `${brand ? `&title=${brand}` : ''}`
    const shoesTypeFilter = `${shoesType ? `&filter=${shoesType}` : ''}`
    const sexFilter = `${sex ? `&filter=${sex}` : ''}`

    axios
      .get(
        `https://63fcd20c859df29986c57847.mockapi.io/sneakerpal?${brandFilter}${shoesTypeFilter}${sexFilter}`
      )
      .then((res) => setSneakers(res.data))
      .catch((err) => console.warn(err))
  }, [brand, shoesType, sex])

  let isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cartData)
      localStorage.setItem('cartItems', json)
    }
    isMounted.current = true
  }, [cartData])

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
        console.log(sex)
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
          cartData,
          setCartData,
        }}
      >
        <Header />
        <Categories
          categoryList={categoryList}
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
