/** @format */

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLoaderData } from 'react-router-dom'

import { scrollToTop } from '../utils/scroll-to-top'
import Breadcrumb from '../components/Breadcrump/Breadcrumb'
import AlertsModal from '../components/Alerts/AlertsModal/AlertsModal'
import ProductForm from '../components/Product/ProductForm/ProductForm'

import useWidth from '../hooks/useWidth'
import useActions from '../hooks/useActions'

import { isSneakerInFavourite } from '../utils/isSneakerInFavourite'

import { favouritesData } from '../redux/slices/favourites/selectors'

function ProductPage() {
  const favouriteList = useSelector(favouritesData)
  const sneakerData = useLoaderData().data
  const width = useWidth()
  const { deleteFromFavourites, addToFavourites } = useActions()

  const isProductInFavourite = isSneakerInFavourite(
    favouriteList,
    sneakerData.id
  )

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
          <ProductForm
            isProductInFavourite={isProductInFavourite}
            deleteFromFavourites={deleteFromFavourites}
            addToFavourites={addToFavourites}
          />
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
