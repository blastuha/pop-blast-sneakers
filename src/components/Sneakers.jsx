import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../App'

function Sneakers() {
  const sneakers = useContext(appContext).sneakers

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
