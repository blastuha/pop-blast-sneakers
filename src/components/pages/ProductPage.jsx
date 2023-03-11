import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Select from '../Select'

function ProductPage() {
  const [sneaker] = useState(useLoaderData())

  // const sneakerDTO = useLoaderData()

  // нужно массив sneakers - превратить в один прдукт

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
                <div className='info-title'>
                  Tommy Hilfiger retro court trainer
                </div>
                <div className='info-price'>6000 руб.</div>
              </div>
            </div>
            <div className='info-item'>
              <Select />
              <Select />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
