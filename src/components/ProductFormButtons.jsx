import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

const ProductFormButtons = ({
  sneakerDTO,
  alert,
  showCartAlert,
  isInCart,
  addToCart,
}) => {
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
        <div
          class='form-btn add-to-cart'
          isInCart={isInCart.toString()}
          onClick={() => {}}
        >
          <button className='plus-btn'>+</button>
          <div className='item-incart'>
            <a href='/'>Товар в корзине</a>
          </div>
          <button className='minus-btn'>-</button>
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
