import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

function Sneaker() {
  const [sneakers] = useOutletContext()

  // нужно добавить в массив адрес ссылки на продукт
  // нужно массив sneakers - превратить в один прдукт

  return sneakers.map((sneaker) => (
    <div
      className='sneaker'
      key={sneaker.id}
    >
      <img
        src={sneaker.imageUrl}
        alt='sneaker'
        className='sneaker__img'
      />
      <a
        href='/'
        className='sneaker__title'
      >
        {sneaker.title}
      </a>
      <a
        href='/'
        className='sneaker__price'
      >
        {sneaker.price}
      </a>
    </div>
  ))
}

export default Sneaker
