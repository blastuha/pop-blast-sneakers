import React from 'react'
import styles from './cartCounter.module.scss'


import {cart} from "../../../redux/slices/cart/selectors";
import { useSelector } from 'react-redux'

function CartCounter() {
  const {cartData} = useSelector(cart)

  const totalPrice = cartData.reduce((acc, curr) => {
    let itemPrice = 0

    if (curr.quantity > 1) {
      itemPrice += curr.price * curr.quantity
    } else {
      itemPrice += curr.price
    }
    acc += itemPrice
    return acc
  }, 0)

  const totalItems = cartData.reduce((acc, curr) => {
    acc += curr.quantity
    return acc
  }, 0)

  return (
    <div className={styles.cart__counter}>
      <div className={styles['counter-total-sticky']}>
        <div className={styles['counter-total-items']}>
          <span className={styles['total-products']}>Товары ( {totalItems} )</span>
          <span className={styles['total-price']}>{totalPrice} руб.</span>
        </div>
        <div className={styles['counter-total-price']}>
          <div className={styles['price-text']}>Итого:</div>
          <div className={styles['full-price']}>{totalPrice} руб.</div>
        </div>
        <button
          type='submit'
          className={styles['counter-btn']}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  )
}

export default CartCounter
