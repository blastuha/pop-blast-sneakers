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
        <button
          type='button'
          class='form-btn add-to-cart'
          isInCart={isInCart.toString()}
          onClick={() => {}}
        >
          <span>Товар в корзине</span>
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
