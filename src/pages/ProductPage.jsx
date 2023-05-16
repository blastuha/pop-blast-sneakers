import React, { useEffect } from 'react'

import { useLoaderData } from 'react-router-dom'

import { scrollToTop } from '../utils/scroll-to-top'
import Breadcrumb from '../components/Breadcrump/Breadcrumb'
import AllAlerts from '../components/Alerts/AllAlerts'
import ProductForm from '../components/Product/ProductForm'

function ProductPage() {
  const sneakerData = useLoaderData().data // data transfer object

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div className='product'>
      <div className='product__container'>
        <Breadcrumb sneakerData={sneakerData} />
        <div className='product__main'>
          <AllAlerts />
          <div className='product__photo'>
            <img
              src={sneakerData.imageUrl}
              alt='sneaker'
            />
          </div>
          <ProductForm alert={alert} />
        </div>
        <article className='product__description'>
          <h3 className='description__title'>Описание</h3>
          <p className='description__text'>{sneakerData.description}</p>
        </article>
      </div>
    </div>
  )
}

export default ProductPage
