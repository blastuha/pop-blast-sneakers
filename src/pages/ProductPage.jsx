import React, { useEffect } from 'react'

import { useLoaderData } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { deleteShownAlert } from '../redux/slices/alertsSlice'
import {
  setIsInCart,
  // setSneakerQuantity,
  setSneakerIndex,
} from '../redux/slices/cartSlice'
import useSetSneakerQuantity from '../hooks/useSetSneakerQuantity'

import { scrollToTop } from '../helpers'
import { alertObj } from '../data'
import Breadcrumb from '../components/Breadcrump/Breadcrumb'
import AllAlerts from '../components/Alerts/AllAlerts'
import ProductForm from '../components/Product/ProductForm'

function ProductPage() {
  const sneakerDTO = useLoaderData() // data transfer object

  const dispatch = useDispatch()
  const alertsList = useSelector((state) => state.alerts.alertsList)
  // const cartData = useSelector((state) => state.cart.cartData)
  // const sneakerIndex = useSelector((state) => state.cart.sneakerIndex)
  const selectedSize = useSelector((state) => state.cart.selectedSize)
  const selectedColor = useSelector((state) => state.cart.selectedColor)

  const alert = alertObj(alertsList)
  const { cartData, sneakerIndex, quantityOfSneaker } = useSetSneakerQuantity()
  // const quantityOfSneaker = cartData[sneakerIndex]?.quantity

  // useEffect(() => {
  //   dispatch(setSneakerQuantity(quantityOfSneaker))
  // }, [quantityOfSneaker, dispatch])

  useEffect(() => {
    dispatch(setSneakerIndex(sneakerDTO.data.id))
    if (sneakerIndex >= 0) {
      dispatch(setIsInCart(true))
    } else {
      dispatch(setIsInCart(false))
    }
  }, [
    dispatch,
    sneakerDTO,
    sneakerIndex,
    cartData,
    selectedSize,
    selectedColor,
  ])

  useEffect(() => {
    scrollToTop()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (alertsList.length) {
        dispatch(deleteShownAlert(alertsList[0].id))
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [alertsList, dispatch])

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
          <ProductForm alert={alert} />
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
