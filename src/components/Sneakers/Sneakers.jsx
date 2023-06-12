import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import styles from './sneakers.module.scss'

function Sneakers({ sneakersList, value, isFavouristes }) {
  return sneakersList
    .filter((sneaker) =>
      sneaker.title.toLowerCase().includes(value.toLowerCase().trim())
    )
    .map((sneaker, i) => (
      <div
        className={styles.sneaker}
        key={i}
      >
        <img
          src={sneaker.imageUrl}
          alt='sneaker'
        />
        {isFavouristes === 'true' ? (
          <AiFillHeart
            className={styles.favourites}
            isFavouristes={isFavouristes}
          />
        ) : (
          <AiOutlineHeart className={styles.favourites} />
        )}
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
