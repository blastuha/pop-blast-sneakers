import React from 'react'

import { useLoaderData, Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { showCartAlert } from '../../redux/slices/alertsSlice'

import { AiOutlineHeart } from 'react-icons/ai'

const ProductFormButtons = ({
  alert,
  addToCart,
  onCountButtons,
  itemQuantity,
  deleteItem,
}) => {
  const sneakerDTO = useLoaderData()
  const sneakerId = sneakerDTO.data.id
  const sneakerQuantity = itemQuantity(sneakerId)

  const isInCart = useSelector((state) => state.product.isInCart)
  const dispatch = useDispatch()

  const createCartAlert = (item) => dispatch(showCartAlert(item))

  return (
    <div class='form__buttons'>
      {!isInCart ? (
        <button
          type='button'
          class='form-btn add-to-cart'
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
          class='form-btn add-to-cart'
          isincart={isInCart.toString()}
        >
          <button
            className='minus-btn'
            onClick={(e) => {
              onCountButtons(e, sneakerId)
              deleteItem(sneakerId)
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
        class='form-btn'
      >
        <AiOutlineHeart class='heart' />
      </button>
    </div>
  )
}

export default ProductFormButtons
