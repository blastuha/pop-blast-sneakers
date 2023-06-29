import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

import styles from './sneakerCard.module.scss'

const SneakerCard = ({
  imageUrl,
  id,
  title,
  price,
  isFavourites,
  isInFavourite,
  addToFavourites,
  deleteFromFavourites,
  addAlert,
  alert,
  sneaker,
}) => {
  return (
    <div className={styles.sneaker}>
      <img
        src={imageUrl}
        alt='sneaker'
      />
      {isFavourites === 'true' || isInFavourite ? (
        <AiFillHeart
          className={styles.heartIcon}
          isfavourites={isFavourites}
          onClick={() => deleteFromFavourites(id)}
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
        to={'/products/' + id}
        className={styles.sneaker__title}
      >
        {title}
      </Link>
      <a
        href='/'
        className={styles.sneaker__price}
      >
        {price} руб.
      </a>
    </div>
  )
}

export default SneakerCard
