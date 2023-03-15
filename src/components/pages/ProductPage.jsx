import React, { useEffect } from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import Select from '../Select'
import { AiOutlineHeart } from 'react-icons/ai'
import Breadcrumb from '../Breadcrumb'

function ProductPage() {
  const sneakerDTO = useLoaderData() // data transfer object

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className='product'>
      <div className='product__container'>
        <Breadcrumb />
        <div className='product__main'>
          <div className='product__photo'>
            <img
              src={sneakerDTO.data.imageUrl}
              alt='sneaker'
            />
          </div>
          <form
            action='/'
            method='post'
            className='product__info'
          >
            <div className='info-item'>
              <div className='info-header'>
                <div className='info-title'>{sneakerDTO.data.title}</div>
                <div className='info-price'>{sneakerDTO.data.price}</div>
              </div>
            </div>
            <div className='info-item'>
              <Select
                color={sneakerDTO.data.color}
                sizes={sneakerDTO.data.sizes}
              />
            </div>
            <div className='info-buttons'>
              <button
                type='button'
                className='info-btn cart'
              >
                В корзину
              </button>
              <button
                type='button'
                className='info-btn'
              >
                <AiOutlineHeart className='heart' />
              </button>
            </div>
          </form>
        </div>
        <div className='product__description'>
          <div className='description-item'>
            <div className='description-title'>Описание</div>
            <div className='description-text'>
              {sneakerDTO.data.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const productLoader = async ({ request, params }) => {
  // console.log(params.id)
  return axios
    .get(`https://63fcd20c859df29986c57847.mockapi.io/sneakerpal/${params.id}`)
    .catch((res) => console.warn(res))
}

export default ProductPage
export { productLoader }
