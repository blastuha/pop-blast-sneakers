import React from 'react'

import { useLoaderData } from 'react-router-dom'

import Selects from './Selects'
import ProductFormButtons from './ProductFormButtons'

const ProductForm = ({ alert, addToCart, onCountButtons }) => {
  const sneakerDTO = useLoaderData()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form
      action='/'
      method='post'
      className='product__form'
      onSubmit={handleSubmit}
    >
      <div className='form__items'>
        <div className='form__header'>
          <h3 className='form__title'>{sneakerDTO.data.title}</h3>
          <b className='form__price'>{sneakerDTO.data.price} руб.</b>
        </div>
        <Selects />
        <ProductFormButtons
          alert={alert}
          addToCart={addToCart}
        />
      </div>
    </form>
  )
}

export default ProductForm
