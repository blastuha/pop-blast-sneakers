import React, { useEffect } from 'react'

import { useLoaderData } from 'react-router-dom'

import { scrollToTop } from '../utils'
import Breadcrumb from '../components/Breadcrump/Breadcrumb'
import AllAlerts from '../components/Alerts/AllAlerts'
import ProductForm from '../components/Product/ProductForm'

function ProductPage() {
  const sneakerDTO = useLoaderData() // data transfer object

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div className='product'>
      <div className='product__container'>
        <Breadcrumb sneakerDTO={sneakerDTO} />
        <div className='product__main'>
          <AllAlerts />
          <div className='product__photo'>
            <img
              src={sneakerDTO.data.imageUrl}
              alt='sneaker'
            />
          </div>
          <ProductForm alert={alert} />
        </div>
        <article className='product__description'>
          <h3 className='description__title'>Описание</h3>
          <p className='description__text'>{sneakerDTO.data.description}</p>
        </article>
      </div>
    </div>
  )
}

export default ProductPage
