import React from 'react'

import { useLoaderData, Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import {
  deleteItem,
  increaseQunatity,
  decreaseQunaitty,
} from '../../redux/slices/productSlice'
import { showCartAlert } from '../../redux/slices/alertsSlice'

import { AiOutlineHeart } from 'react-icons/ai'

const ProductFormButtons = ({ alert, addToCart, onCountButtons }) => {
  const sneakerDTO = useLoaderData()
  const sneakerId = sneakerDTO.data.id

  const isInCart = useSelector((state) => state.product.isInCart)
  console.log(isInCart)
  const sneakerQuantity = useSelector((state) => state.product.sneakerQuantity)
  const dispatch = useDispatch()

  const createCartAlert = (item) => dispatch(showCartAlert(item))

  return (
    <div className='form__buttons'>
      {!isInCart ? (
        <button
          type='button'
          className='form-btn add-to-cart'
          onClick={() => {
            addToCart(sneakerDTO.data)
            createCartAlert(alert)
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
              dispatch(decreaseQunaitty(sneakerId))
              dispatch(deleteItem(sneakerId))
            }}
          >
            -
          </button>
          <div className='item-incart'>
            <Link to='/cart'>В корзине {sneakerQuantity} шт.</Link>
          </div>
          <button
            className='plus-btn'
            onClick={(e) => onCountButtons(e, sneakerId)}
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
