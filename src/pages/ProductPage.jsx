import React, { useEffect, useCallback } from 'react'

import { useLoaderData } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { setAlertsList } from '../redux/slices/alertsSlice'
import {
  setIsInCart,
  setCartData,
  setSneakerQuantity,
  addItem,
  deleteItem,
  increaseQunatity,
  decreaseQunaitty,
  getSneakerIndex,
} from '../redux/slices/productSlice'

import { scrollToTop } from '../helpers'
import { alertObj } from '../data'
import Breadcrumb from '../components/Breadcrump/Breadcrumb'
import AllAlerts from '../components/Alerts/AllAlerts'
import ProductForm from '../components/Product/ProductForm'

function ProductPage() {
  const sneakerDTO = useLoaderData() // data transfer object

  const dispatch = useDispatch()
  const alertsList = useSelector((state) => state.alerts.alertsList)
  const cartData = useSelector((state) => state.product.cartData)
  const sneakerIndex = useSelector((state) => state.product.sneakerIndex)

  const alert = alertObj(alertsList)
  const quantityOfSneaker = cartData[sneakerIndex]?.quantity

  useEffect(() => {
    dispatch(setSneakerQuantity(quantityOfSneaker))
  }, [quantityOfSneaker, dispatch])

  useEffect(() => {
    dispatch(getSneakerIndex(sneakerDTO.data.id))
    if (sneakerIndex >= 0) {
      dispatch(setIsInCart(true))
    } else {
      dispatch(setIsInCart(false))
    }
  }, [dispatch, sneakerDTO, sneakerIndex])

  useEffect(() => {
    scrollToTop()
  }, [])

  //*---- Взаимодействие с корзиной
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
    // const sneakerIndex = findIndexInCart(sneaker.id)
    console.log(sneakerIndex, 'addToCart')
    if (sneakerIndex >= 0) {
      dispatch(setCartData(changeQuantity(sneakerIndex)))
    } else {
      dispatch(addItem(sneaker))
    }
  }

  const onCountButtons = (event, sneakerId) => {
    // const sneakerIndex = findIndexInCart(sneakerId)
    if (sneakerIndex >= 0) {
      dispatch(setCartData(changeQuantity(event, sneakerIndex)))
    } else {
      return
    }
  }

  //---- Конец взаимодействия с корзиной

  //*---- Логика алертов
  const deleteShownAlert = useCallback(
    (id) => {
      const alertsListFiltred = alertsList.filter((item) => item.id !== id)
      dispatch(setAlertsList(alertsListFiltred))
    },
    [alertsList, dispatch]
  )

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

  //---- Конец логики алертов

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
            alert={alert}
            addToCart={addToCart}
            onCountButtons={onCountButtons}
            deleteItem={deleteItem}
          />
          <button onClick={() => dispatch(increaseQunatity(0))}>+</button>
          <button onClick={() => dispatch(decreaseQunaitty(0))}>-</button>
        </div>
        <article className='product__description'>
          <h3 className='description__title'>Описание</h3>
          <p className='description__text'>{sneakerDTO.data.description}</p>
        </article>
      </div>
    </div>
  )
}

export default ProductPage
