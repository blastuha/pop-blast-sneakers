import React from 'react'
import { useSelector } from 'react-redux'
import { useLoaderData, Link } from 'react-router-dom'

import { AiOutlineHeart } from 'react-icons/ai'

import useIsSneakerInCart from '../../../hooks/useIsSneakerInCart'
import useAlerts from '../../../hooks/useAlerts'
import useActions from '../../../hooks/useActions'
import { makeAlertObj } from '../../../utils/makeAlertObj'

import { cart } from '../../../redux/slices/cart/selectors'

import styles from './productFormButtons.module.scss'

const ProductFormButtons = () => {
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

  const alert = makeAlertObj(alertsList, '✓ Товар добавлен в корзину')
  const sneakerQuantity = cartData[sneakerIndex]?.quantity

  return (
    <div className={styles.form__buttons}>
      {!isInCart ? (
        <button
          type='button'
          className={`${styles.form__btn} ${styles.addToCart}`}
          onClick={() => {
            addItemToCart(sneakerData)
            addAlert(alert)
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

      <button
        type='button'
        className={styles.form__btn}
      >
        <AiOutlineHeart className={styles.heart} />
      </button>
    </div>
  )
}

export default ProductFormButtons
