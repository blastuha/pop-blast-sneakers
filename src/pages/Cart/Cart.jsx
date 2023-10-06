import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { cart } from '../../redux/slices/cart/selectors'

import Breadcrumb from '../../components/Breadcrump/Breadcrumb'
import CartItem from '../../components/Cart/CartItem/CartItem'
import CartCounter from '../../components/Cart/CartCounter/CartCounter'
import useWidth from '../../hooks/useWidth'
import { scrollToTop } from '../../utils/scroll-to-top'

import styles from './cart.module.scss'

function Cart() {
  const { cartData } = useSelector(cart)
  const width = useWidth()

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div className={styles.cart}>
      <div
        className={`${styles['cart__container']} ${
          width <= 767 ? styles.mobile : styles.desktop
        }`}
      >
        {width > 767 && <Breadcrumb />}
        <div className={styles['cart__header']}>
          <h3 className={styles['cart-title']}>Корзина</h3>
        </div>
        <div className={styles['cart__main']}>
          <div className={styles['cart__items']}>
            {cartData.length === 0 ? (
              <div className={styles['empty-cart']}>Ваша корзина пуста</div>
            ) : (
              <CartItem cartData={cartData} />
            )}
          </div>
          <CartCounter />
        </div>
      </div>
    </div>
  )
}

export default Cart
