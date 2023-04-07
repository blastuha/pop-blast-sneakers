import './App.scss'

import React, { useEffect, useState, useRef } from 'react'
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
  const getStorageItems = () => {
    const data = localStorage.getItem('cartItems')
    return data ? JSON.parse(data) : ''
  }

  const [sneakers, setSneakers] = useState([])
  const [brand, setBrand] = useState('')
  const [shoesType, setShoesType] = useState('')
  const [sex, setSex] = useState('')
  const [cartData, setCartData] = useState(getStorageItems())
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

  const onChangeSize = (event) => {
    // console.log(selectedSize)
    setSelectedSize(event.target.value)
  }

  const onChangeColor = (event) => {
    // console.log(selectedColor)
    setSelectedColor(event.target.value)
  }

  //-- Логика добавления товара в корзину
  // Если товара не было, то добавляем товар через addItem
  const addItem = (sneaker) => {
    const itemToAdd = {
      ...sneaker,
      quantity: 1,
      size: selectedSize,
      color: selectedColor,
    }
    setCartData([...cartData, itemToAdd])
  }

  //Проверка, есть ли товар в корзине, ищем его индекс
  const isExistInCart = (id) => {
    const findIndex = cartData.findIndex(
      (item) =>
        item.id === id &&
        item.color === selectedColor &&
        item.size === selectedSize
    )
    return findIndex
  }

  // Через индекс находим нужный товар и меняем его количество
  const changeQuantity = (itemIndex) => {
    const newCartData = cartData.map((item, i) => {
      if (itemIndex === i) {
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })
    return newCartData
  }

  const addToCart = (sneaker) => {
    const sneakerIndex = isExistInCart(sneaker.id)
    if (sneakerIndex >= 0) {
      setCartData(changeQuantity(sneakerIndex))
    } else {
      addItem(sneaker)
    }
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
