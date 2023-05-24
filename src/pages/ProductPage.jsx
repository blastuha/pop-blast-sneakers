import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

import { scrollToTop } from '../utils/scroll-to-top'
import Breadcrumb from '../components/Breadcrump/Breadcrumb'
import AlertsModal from '../components/Alerts/AlertsModal/AlertsModal'
import ProductForm from '../components/Product/ProductForm/ProductForm'

function ProductPage() {
  const sneakerData = useLoaderData().data
  const [width, setWidth] = useState(window.innerWidth)

  window.onresize = function (event) {
    setWidth(event.srcElement.innerWidth)
  }

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div className='product'>
      <div className='product__container'>
        {width > 767 ? <Breadcrumb sneakerData={sneakerData} /> : ''}
        <div className='product__main'>
          <AlertsModal />
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
