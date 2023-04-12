import React from 'react'

import Selects from './Selects'
import ProductFormButtons from './ProductFormButtons'

const ProductForm = ({
  sneakerDTO,
  showCartAlert,
  alert,
  isInCart,
  addToCart,
  onChangeSize,
  onChangeColor,
  selectedColor,
  selectedSize,
}) => {
  return (
    <form
      action='/'
      method='post'
      class='product__form'
    >
      <div class='form__items'>
        <div class='form__header'>
          <h3 class='form__title'>{sneakerDTO.data.title}</h3>
          <b class='form__price'>{sneakerDTO.data.price} руб.</b>
        </div>
        <Selects
          color={sneakerDTO.data.color}
          sizes={sneakerDTO.data.sizes}
          onChangeSize={onChangeSize}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
          onChangeColor={onChangeColor}
        />
        <ProductFormButtons
          showCartAlert={showCartAlert}
          sneakerDTO={sneakerDTO}
          alert={alert}
          isInCart={isInCart}
          addToCart={addToCart}
        />
      </div>
    </form>
  )
}

export default ProductForm
