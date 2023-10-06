import React from 'react'
import { useSelector } from 'react-redux'
import { useLoaderData, Link } from 'react-router-dom'

import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

import useIsSneakerInCart from '../../../hooks/useIsSneakerInCart'
import useAlerts from '../../../hooks/useAlerts'
import useActions from '../../../hooks/useActions'
import { makeAlertObj } from '../../../utils/makeAlertObj'

import { cart } from '../../../redux/slices/cart/selectors'

import styles from './productFormButtons.module.scss'

const ProductFormButtons = ({
  isProductInFavourite,
  addToFavourites,
  deleteFromFavourites,
}) => {
  const { cartData, sneakerIndex } = useSelector(cart)

  const sneakerData = useLoaderData().data

  const isInCart = useIsSneakerInCart(sneakerData.id)
  const alertsList = useAlerts()
  const sneakerId = sneakerData.id
  const {
    addAlert,
    addItemToCart,
    decreaseQunaitty,
    deleteItem,
    increaseQunatity,
  } = useActions()

  const addToCartAler = makeAlertObj(alertsList, '✓ Товар добавлен в корзину')
  const addToFavAlert = makeAlertObj(alertsList, '✓ Товар добавлен в избранное')
  const removeFromFavAlert = makeAlertObj(
    alertsList,
    '✓ Товар удален из избранных'
  )
  const sneakerQuantity = cartData[sneakerIndex]?.quantity

  return (
    <div className={styles.form__buttons}>
      {!isInCart ? (
        <button
          type='button'
          className={`${styles.form__btn} ${styles.addToCart}`}
          onClick={() => {
            addItemToCart(sneakerData)
            addAlert(addToCartAler)
          }}
        >
          <span>В корзину</span>
        </button>
      ) : (
        <div
          type='button'
          className={`${styles.form__btn} ${styles.addToCart}`}
          isincart={isInCart.toString()}
        >
          <button
            className={styles.minus__btn}
            onClick={() => {
              decreaseQunaitty(sneakerIndex)
              deleteItem({ sneakerQuantity, sneakerId })
            }}
          >
            -
          </button>
          <div className={styles.itemInCart}>
            <Link to='/cart'>В корзине {sneakerQuantity} шт.</Link>
          </div>
          <button
            className={styles.plus__btn}
            onClick={() => increaseQunatity(sneakerIndex)}
          >
            +
          </button>
        </div>
      )}
      {isProductInFavourite ? (
        <button
          type='button'
          isinfavourites='true'
          className={styles.form__btn}
          onClick={() => {
            deleteFromFavourites(sneakerData.id)
            addAlert(removeFromFavAlert)
          }}
        >
          <AiFillHeart className={styles.heart} />
        </button>
      ) : (
        <button
          type='button'
          className={styles.form__btn}
          onClick={() => {
            addToFavourites(sneakerData)
            addAlert(addToFavAlert)
          }}
        >
          <AiOutlineHeart className={styles.heart} />
        </button>
      )}
    </div>
  )
}

export default ProductFormButtons
