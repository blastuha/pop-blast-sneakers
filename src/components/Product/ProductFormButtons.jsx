import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { cart } from '../../redux/slices/cart/selectors'

import useIsSneakerInCart from '../../hooks/useIsSneakerInCart'
import useRemoveShownAlerts from '../../hooks/useRemoveShownAlerts'
import useActions from '../../hooks/useActions'
import { alertObj } from '../../data'
import { AiOutlineHeart } from 'react-icons/ai'

const ProductFormButtons = () => {
  const sneakerData = useLoaderData().data
  const isInCart = useIsSneakerInCart(sneakerData.id)
  const alertsList = useRemoveShownAlerts()
  const alert = alertObj(alertsList)
  const sneakerId = sneakerData.id
  const {
    addCartAlert,
    addItemToCart,
    decreaseQunaitty,
    deleteItem,
    increaseQunatity,
  } = useActions()
  const { cartData, sneakerIndex } = useSelector(cart)
  const sneakerQuantity = cartData[sneakerIndex]?.quantity

  return (
    <div className='form__buttons'>
      {!isInCart ? (
        <button
          type='button'
          className='form-btn add-to-cart'
          onClick={() => {
            addItemToCart(sneakerData)
            addCartAlert(alert)
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
              decreaseQunaitty(sneakerIndex)
              deleteItem({ sneakerQuantity, sneakerId })
            }}
          >
            -
          </button>
          <div className='item-incart'>
            <Link to='/cart'>В корзине {sneakerQuantity} шт.</Link>
          </div>
          <button
            className='plus-btn'
            onClick={() => increaseQunatity(sneakerIndex)}
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
