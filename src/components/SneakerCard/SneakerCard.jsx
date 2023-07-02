import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

import styles from './sneakerCard.module.scss'

const SneakerCard = ({
  sneaker,
  isFavourites,
  isInFavourite,
  addToFavourites,
  deleteFromFavourites,
  addAlert,
  alert,
}) => {
  return (
    <div className={styles.sneaker}>
      <img
        className={styles.sneaker__image}
        src={sneaker.imageUrl}
        alt='sneaker'
      />
      {isFavourites === 'true' || isInFavourite ? (
        <AiFillHeart
          className={styles.heartIcon}
          isfavourites={isFavourites}
          onClick={() => deleteFromFavourites(sneaker.id)}
        />
      ) : (
        <AiOutlineHeart
          className={styles.heartIcon}
          onClick={() => {
            addToFavourites(sneaker)
            addAlert(alert)
          }}
        />
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
  )
}

export default SneakerCard
