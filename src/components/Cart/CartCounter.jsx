import React, { useContext } from 'react'
import { appContext } from '../../App'

function CartCounter() {
  const cartData = useContext(appContext).cartData

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
    <div className='cart__counter'>
      <div className='counter-total-sticky'>
        <div className='counter-total-items'>
          <span className='total-products'>Товары ( {totalItems} )</span>
          <span className='total-price'>{totalPrice} руб.</span>
        </div>
        <div className='counter-total-price'>
          <div className='price-text'>Итого:</div>
          <div className='full-price'>{totalPrice} руб.</div>
        </div>
        <button
          type='submit'
          className='counter-btn'
        >
          Оформить заказ
        </button>
      </div>
    </div>
  )
}

export default CartCounter
