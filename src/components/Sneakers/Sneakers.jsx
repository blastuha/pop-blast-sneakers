import React from 'react'
import { Link } from 'react-router-dom'

import { favouritesData } from '../../redux/slices/favourites/selectors'
import { useSelector } from 'react-redux'

import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

import useAlerts from '../../hooks/useAlerts'
import useActions from '../../hooks/useActions'
import { alertObj } from '../../data'

import styles from './sneakers.module.scss'

function Sneakers({ sneakersList, value, isfavourites }) {
  const favourites = useSelector(favouritesData)
  const { addToFavourites, deleteFromFavourites, addAlert } = useActions()

  const alertsList = useAlerts()
  const alert = alertObj(alertsList, '✓ Товар добавлен в избранное')

  const isSneakerInFavourite = (id) => {
    return favourites.find((item) => item.id === id)
  }

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
        {isfavourites === 'true' || isSneakerInFavourite(sneaker.id) ? (
          <AiFillHeart
            className={styles.heartIcon}
            isfavourites={isfavourites}
            onClick={() => deleteFromFavourites(sneaker)}
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
    ))
}

export default Sneakers
