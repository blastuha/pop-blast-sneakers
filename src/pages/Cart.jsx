import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

import { scrollToTop } from '../utils/scroll-to-top'
import Breadcrumb from '../components/Breadcrump/Breadcrumb'
import CartItem from '../components/Cart/CartItem'
import CartCounter from '../components/Cart/CartCounter'

function Cart() {
  const cartData = useSelector((state) => state.cart.cartData)

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div className='cart-block'>
      <div className='cart__container'>
        <Breadcrumb />
        <div className='cart__header'>
          <div className='cart-title'>Корзина</div>
        </div>
        <div className='cart__main'>
          <div className='cart__items'>
            {cartData.length === 0 ? (
              <div className='empty-cart'>Ваша корзина пуста</div>
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
