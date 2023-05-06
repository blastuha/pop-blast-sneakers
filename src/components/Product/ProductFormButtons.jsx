import React from 'react'

import { useLoaderData, Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import {
  addItemToCart,
  deleteItem,
  increaseQunatity,
  decreaseQunaitty,
} from '../../redux/slices/cartSlice'
import { addCartAlert } from '../../redux/slices/alertsSlice'
import useIsSneakerInCart from '../../hooks/useIsSneakerInCart'
import useShowAlerts from '../../hooks/useShowAlerts'
import { alertObj } from '../../data'

import { AiOutlineHeart } from 'react-icons/ai'

const ProductFormButtons = () => {
  const isInCart = useIsSneakerInCart()
  const sneakerData = useLoaderData().data
  const sneakerId = sneakerData.id
  const alertsList = useShowAlerts()
  const alert = alertObj(alertsList)

  const cartData = useSelector((state) => state.cart.cartData)
  const sneakerIndex = useSelector((state) => state.cart.sneakerIndex)
  const sneakerQuantity = cartData[sneakerIndex]?.quantity
  const dispatch = useDispatch()

  return (
    <div className='form__buttons'>
      {!isInCart ? (
        <button
          type='button'
          className='form-btn add-to-cart'
          onClick={() => {
            dispatch(addItemToCart(sneakerData))
            dispatch(addCartAlert(alert))
          }}
        >
          <span>В корзину</span>
        </button>
      ) : (
        <div
          type='button'
          className='form-btn add-to-cart'
          isincart={isInCart.toString()}
        >
          <button
            className='minus-btn'
            onClick={() => {
              dispatch(decreaseQunaitty(sneakerIndex))
              dispatch(deleteItem({ sneakerQuantity, sneakerId }))
            }}
          >
            -
          </button>
          <div className='item-incart'>
            <Link to='/cart'>В корзине {sneakerQuantity} шт.</Link>
          </div>
          <button
            className='plus-btn'
            onClick={() => dispatch(increaseQunatity(sneakerIndex))}
          >
            +
          </button>
        </div>
      )}

      <button
        type='button'
        className='form-btn'
      >
        <AiOutlineHeart className='heart' />
      </button>
    </div>
  )
}

export default ProductFormButtons
