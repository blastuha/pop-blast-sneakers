/** @format */

import React from 'react'

import { useLoaderData } from 'react-router-dom'

import Selects from '../Selects/Selects'
import ProductFormButtons from '../ProductFormButtons/ProductFormButtons'

const ProductForm = ({
  isProductInFavourite,
  deleteFromFavourites,
  addToFavourites,
}) => {
  const sneakerData = useLoaderData().data

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
          <h3 className='form__title'>{sneakerData.title}</h3>
          <b className='form__price'>{sneakerData.price} руб.</b>
        </div>
        <Selects />
        <ProductFormButtons
          isProductInFavourite={isProductInFavourite}
          deleteFromFavourites={deleteFromFavourites}
          addToFavourites={addToFavourites}
        />
      </div>
    </form>
  )
}

export default ProductForm
