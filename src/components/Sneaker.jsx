import React, { useState } from 'react'

function Sneaker({ sneakers }) {
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
      <h4 className='sneaker__title'>{sneaker.title}</h4>
      <h3 className='sneaker__price'>{sneaker.price}</h3>
    </div>
  ))
}

export default Sneaker
