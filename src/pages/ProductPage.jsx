import React, { useEffect, useContext, useState, useCallback } from 'react'
import axios from 'axios'

import { useLoaderData } from 'react-router-dom'
import { appContext } from '../App'

import Breadcrumb from '../components/Breadcrump/Breadcrumb'
import AllAlerts from '../components/Alerts/AllAlerts'
import ProductForm from '../components/Product/ProductForm'

function ProductPage() {
  const [selectedSize, setSelectedSize] = useState()
  const [selectedColor, setSelectedColor] = useState('')
  const [isInCart, setIsInCart] = useState(false)
  const [alertsList, setAlertsList] = useState([])

  const sneakerDTO = useLoaderData() // data transfer object
  const cartData = useContext(appContext).cartData
  const setCartData = useContext(appContext).setCartData

  const alert = {
    id: alertsList.length + 1,
    text: '✓ Товар добавлен в корзину',
  }

  useEffect(() => {
    setSelectedSize(sneakerDTO.data.sizes[0])
    setSelectedColor(sneakerDTO.data.color[0])
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  const onChangeSize = (event) => {
    setSelectedSize(event.target.value)
  }

  const onChangeColor = (event) => {
    setSelectedColor(event.target.value)
  }

  //*---- Взаимодействие с корзиной

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
  const changeQuantity = (event, itemIndex) => {
    if (event.target.innerText === '+') {
      const newCartData = cartData.map((item, i) => {
        if (itemIndex === i) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
      return newCartData
    } else {
      const newCartData = cartData.map((item, i) => {
        if (itemIndex === i && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item
        }
      })
      return newCartData
    }
  }

  const addToCart = (sneaker) => {
    const sneakerIndex = isExistInCart(sneaker.id)
    if (sneakerIndex >= 0) {
      setCartData(changeQuantity(sneakerIndex))
    } else {
      addItem(sneaker)
    }
  }

  const deleteItem = (id) => {
    if (whatItemQuantity(id) === 1) {
      const newCartData = [...cartData].filter((item) => item.id !== id)
      setCartData(newCartData)
    } else {
      return
    }
  }

  const onCountButtons = (event, sneakerId) => {
    const sneakerIndex = isExistInCart(sneakerId)
    if (sneakerIndex >= 0) {
      setCartData(changeQuantity(event, sneakerIndex))
    } else {
      return
    }
  }

  //---- Конец взаимодействия с корзиной

  //*---- Отображение алертов

  const deleteShownAlert = useCallback(
    (id) => {
      const alertsListFiltred = alertsList.filter((item) => item.id !== id)
      setAlertsList(alertsListFiltred)
    },
    [alertsList]
  )

  const showCartAlert = (item) => {
    setAlertsList([...alertsList, item])
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (alertsList.length) {
        deleteShownAlert(alertsList[0].id)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [alertsList, deleteShownAlert])

  //---- Конец отображения алертов

  //? utility
  const isItemInCartChecker = (id) => {
    if (isExistInCart(id) >= 0) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }

  useEffect(() => {
    isItemInCartChecker(sneakerDTO.data.id)
  }, [isExistInCart])

  const whatItemQuantity = (id) => {
    const sneakerIndex = isExistInCart(id)
    if (sneakerIndex >= 0) {
      return cartData[sneakerIndex].quantity
    }
  }

  return (
    <div className='product'>
      <div className='product__container'>
        <Breadcrumb sneakerDTO={sneakerDTO} />
        <div className='product__main'>
          <AllAlerts alertsList={alertsList} />
          <div className='product__photo'>
            <img
              src={sneakerDTO.data.imageUrl}
              alt='sneaker'
            />
          </div>
          <ProductForm
            showCartAlert={showCartAlert}
            alert={alert}
            isInCart={isInCart}
            addToCart={addToCart}
            onChangeSize={onChangeSize}
            onChangeColor={onChangeColor}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
            changeQuantity={changeQuantity}
            onCountButtons={onCountButtons}
            whatItemQuantity={whatItemQuantity}
            deleteItem={deleteItem}
          />
        </div>
        <article className='product__description'>
          <h3 className='description__title'>Описание</h3>
          <p className='description__text'>{sneakerDTO.data.description}</p>
        </article>
      </div>
    </div>
  )
}

const productLoader = async ({ params }) => {
  return axios
    .get(`https://63fcd20c859df29986c57847.mockapi.io/sneakerpal/${params.id}`)
    .catch((res) => console.warn(res))
}

export default ProductPage
export { productLoader }
