import React, { useContext } from 'react'
import Breadcrumb from '../Breadcrumb'
import CartItem from './CartItem'
import CartCounter from './CartCounter'
import { appContext } from '../../App'

function Cart() {
  const cartData = useContext(appContext).cartData
  console.log(cartData)

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
