import React from 'react'

import { useLoaderData } from 'react-router-dom'

import { AiOutlineHeart } from 'react-icons/ai'

const ProductFormButtons = ({
  alert,
  showCartAlert,
  isInCart,
  addToCart,
  onCountButtons,
  whatItemQuantity,
  deleteItem,
}) => {
  const sneakerDTO = useLoaderData()
  const sneakerId = sneakerDTO.data.id
  const sneakerQuantity = whatItemQuantity(sneakerId)

  return (
    <div class='form__buttons'>
      {!isInCart ? (
        <button
          type='button'
          class='form-btn add-to-cart'
          onClick={() => {
            addToCart(sneakerDTO.data)
            showCartAlert(alert)
          }}
        >
          <span>В корзину</span>
        </button>
      ) : (
        <button
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
            <a href='/'>В корзине {sneakerQuantity} шт.</a>
          </div>
          <button
            className='plus-btn'
            onClick={(e) => onCountButtons(e, sneakerId)}
          >
            +
          </button>
        </button>
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
