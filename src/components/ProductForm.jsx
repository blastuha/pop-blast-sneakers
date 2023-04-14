import React from 'react'

import { useLoaderData } from 'react-router-dom'

import Selects from './Selects'
import ProductFormButtons from './ProductFormButtons'

const ProductForm = ({
  showCartAlert,
  alert,
  isInCart,
  addToCart,
  onChangeSize,
  onChangeColor,
  selectedColor,
  selectedSize,
  onCountButtons,
  whatItemQuantity,
  deleteItem,
}) => {
  const sneakerDTO = useLoaderData()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form
      action='/'
      method='post'
      class='product__form'
      onSubmit={handleSubmit}
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
          alert={alert}
          isInCart={isInCart}
          addToCart={addToCart}
          onCountButtons={onCountButtons}
          whatItemQuantity={whatItemQuantity}
          deleteItem={deleteItem}
        />
      </div>
    </form>
  )
}

export default ProductForm
