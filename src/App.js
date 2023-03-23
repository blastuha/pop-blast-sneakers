import './App.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Categories from './components/Categories'
import { brands } from './data'
import { types } from './data'
import { sexArray } from './data'
import { Outlet } from 'react-router-dom'

const categoryList = [
  { name: 'Бренды', menu: brands },
  { name: 'Тип обуви', menu: types },
  { name: 'Пол', menu: sexArray },
]

export const appContext = React.createContext('')

function App() {
  const [sneakers, setSneakers] = useState([])
  const [brand, setBrand] = useState('')
  const [shoesType, setShoesType] = useState('')
  const [sex, setSex] = useState('')
  const [cartData, setCartData] = useState([])
  const [selectedSize, setSelectedSize] = useState()
  const [selectedColor, setSelectedColor] = useState('')

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

  let isMounted = false
  console.log(isMounted)
  useEffect(() => {
    const json = JSON.stringify(cartData)
    localStorage.setItem('cartItems', json)
    isMounted = true
    console.log(json, isMounted)
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

  const addToCart = (sneakerObj) => {
    const findIndex = cartData.findIndex((obj) => obj.id === sneakerObj.id)
    if (findIndex >= 0) {
      cartData[findIndex].quantity = cartData[findIndex].quantity + 1
    } else {
      const sneakerNew = { ...sneakerObj, quantity: 1 }
      setCartData([...cartData, sneakerNew])
    }
  }

  const onChangeSize = (event) => {
    setSelectedSize(event.target.value)
    console.log(selectedSize)
  }

  const onChangeColor = (event) => {
    setSelectedColor(event.target.value)
    console.log(selectedColor)
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
          addToCart,
          setCartData,
          onChangeSize,
          onChangeColor,
          selectedSize,
          selectedColor,
          setSelectedSize,
          setSelectedColor,
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
