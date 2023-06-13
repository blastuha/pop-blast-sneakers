import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

import useActions from '../../hooks/useActions'

import { favouritesData } from '../../redux/slices/favourites/selectors'
import { useSelector } from 'react-redux'

import styles from './sneakers.module.scss'

import useAlerts from '../../hooks/useAlerts'
import { alertObj } from '../../data'

function Sneakers({ sneakersList, value, isfavourites }) {
  const favourites = useSelector(favouritesData)
  const { addToFavourites, deleteFromFavourites, addCartAlert } = useActions()

  const alertsList = useAlerts()
  const alert = alertObj(alertsList, '✓ Товар добавлен в корзину')

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
            className={styles.favourites}
            isfavourites={isfavourites}
            onClick={() => deleteFromFavourites(sneaker)}
          />
        ) : (
          <AiOutlineHeart
            className={styles.favourites}
            onClick={() => {
              addToFavourites(sneaker)
              addCartAlert(alert)
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
