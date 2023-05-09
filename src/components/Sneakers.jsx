import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Sneakers() {
  const sneakers = useSelector((state) => state.sneakers.sneakers)

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
        to={'/products/' + sneaker.id}
        className='sneaker__title'
      >
        {sneaker.title}
      </Link>
      <a
        href='/'
        className='sneaker__price'
      >
        {sneaker.price} руб.
      </a>
    </div>
  ))
}

export default Sneakers
