import React, { useState } from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import Select from '../Select'

function ProductPage() {
  const sneakerDTO = useLoaderData() // data transfer object

  return (
    <div className='product'>
      <div className='product__container'>
        <div className='product__main'>
          <div className='product__photo'>
            <img
              src='https://static.insales-cdn.com/r/WvM-a6seMTo/rs:fit:950:1187:1/q:100/plain/images/products/1/3145/643001417/118894836_1.jpg@webp'
              alt='sneaker'
            />
          </div>
          <div className='product__info'>
            <div className='info-item'>
              <div className='info-header'>
                <div className='info-title'>{sneakerDTO.data.title}</div>
                <div className='info-price'>6000 руб.</div>
              </div>
            </div>
            <div className='info-item'>
              <Select color={sneakerDTO.data.color} />
              <Select sizes={sneakerDTO.data.sizes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const productLoader = async ({ request, params }) => {
  // console.log(params.id)
  return axios.get(
    `https://63fcd20c859df29986c57847.mockapi.io/sneakerpal/${params.id}`
  )
}

export default ProductPage
export { productLoader }
