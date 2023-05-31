import React from 'react'
import styles from './sneakers.module.scss'
import { Link } from 'react-router-dom'

function Sneakers({ sneakersList, value }) {
  return sneakersList
    .filter((sneaker) =>
      sneaker.title.toLowerCase().includes(value.toLowerCase().trim())
    )
    .map((sneaker) => (
      <div
        className={styles.sneaker}
        key={sneaker.id}
      >
        <img
          src={sneaker.imageUrl}
          alt='sneaker'
        />
        <Link
          to={'/products/' + sneaker.id}
          className={styles.sneaker__title}
        >
          {sneaker.title}
        </Link>
        <a
          href='/'
          className={styles.sneaker__price}
        >
          {sneaker.price} руб.
        </a>
      </div>
    ))
}

export default Sneakers
