import React, { useState } from 'react'
import { useOutletContext, Link } from 'react-router-dom'

function Sneaker() {
  const [sneakers] = useOutletContext()

  const linkId = (sneakerId) => {
    return sneakers
      .filter((obj) => obj.id === sneakerId)
      .map((obj) => {
        return obj.id
      })
  }

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
      <Link
        to={'/products/' + linkId(sneaker.id)}
        className='sneaker__title'
      >
        {sneaker.title}
      </Link>
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
