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

  const addToCart = (sneakerObj) => {
    const itemToAdd = {
      ...sneakerObj,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
    }

    const sneakerInCart = cartData.find(
      (sneaker) => itemToAdd.id === sneaker.id
    )

    const sneakerSecondId = cartData.find(
      (sneaker) => itemToAdd.id === sneaker.id && itemToAdd && sneaker.secondId
    )

    if (
      sneakerInCart &&
      sneakerInCart.color === itemToAdd.color &&
      sneakerInCart.size === itemToAdd.size
    ) {
      const newCartData = cartData.map((sneaker) => {
        if (sneaker.id === itemToAdd.id) {
          console.log('sneaker edited', sneakerInCart.color, itemToAdd.color)
          return {
            ...sneaker,
            quantity: sneaker.quantity + 1,
            color: selectedColor,
            size: selectedSize,
          }
        } else {
          console.log('sneaker')
          return sneaker
        }
      })
      setCartData(newCartData)
      console.log('id уже был', cartData)
    } else if (
      (sneakerInCart && sneakerInCart.color !== itemToAdd.color) ||
      (sneakerInCart && sneakerInCart.size !== itemToAdd.size)
    ) {
      // сделать проверку, если добавляемый кроссовок с такими параметрами уже есть (Id, color, size), то находим его через мап, и изменяем его количество. А если не было, добавить как новый.
      if (sneakerSecondId) {
        const newCartData = cartData.map((sneaker) => {
          if (
            sneaker.secondId === sneakerSecondId.secondId &&
            sneaker.size === itemToAdd.size
          ) {
            console.log('id был + secondid был, но такой размер уже есть')
            return { ...sneaker, quantity: sneaker.quantity + 1 }
          } else {
            console.log('id был + secondid был, но такого размера нет')
            return sneaker
          }
        })
        setCartData(newCartData)
      } else {
        console.log('id был, но размер или цвет отличается')
        const itemToAddNew = { ...itemToAdd, secondId: Date.now() }
        setCartData([...cartData, itemToAddNew])
      }
    } else {
      setCartData([...cartData, itemToAdd])
      console.log('кроссовка не было')
    }
  }

  const onChangeSize = (event) => {
    // console.log(selectedSize)
    setSelectedSize(event.target.value)
  }

  const onChangeColor = (event) => {
    // console.log(selectedColor)
    setSelectedColor(event.target.value)
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

// const addToCart = (sneakerObj) => {
//   const findIndex = cartData.findIndex((obj) => obj.id === sneakerObj.id)
//   const cartItem = cartData[findIndex]
//   let itemToAdd = {
//     ...sneakerObj,
//     size: selectedSize,
//     color: selectedColor,
//   }
//   if (findIndex >= 0) {
//     if (
//       cartItem.size !== itemToAdd.size ||
//       cartItem.color !== itemToAdd.color
//     ) {
//       console.log(cartItem.size, itemToAdd.size)
//       itemToAdd = {
//         ...itemToAdd,
//         secondId: Date.now(),
//         quantity: 1,
//       }
//       console.log('другой размер/цвет кроссовка')
//       setCartData([...cartData, itemToAdd])
//     } else {
//       console.log('цвет и размер совпадают', cartItem.size, itemToAdd.size)
//       cartData[findIndex].quantity = cartData[findIndex].quantity + 1
//     }
//   } else {
//     const sneakerNew = {
//       ...sneakerObj,
//       quantity: 1,
//       size: selectedSize,
//       color: selectedColor,
//     }
//     setCartData([...cartData, sneakerNew])
//     console.log('кроссовка не было')
//   }
// }
