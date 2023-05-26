import React from 'react'
import styles from './cartItem.scss'

import { Link } from 'react-router-dom'
import ItemCounter from '../ItemCounter/ItemCounter'
import { AiOutlineDelete } from 'react-icons/ai'

import { useSelector } from 'react-redux'
import useActions from '../../../hooks/useActions'
import useWidth from '../../../hooks/useWidth'

function CartItem() {
  const { setCartData } = useActions()
  const cartData = useSelector((state) => state.cart.cartData)
  const width = useWidth()
  console.log(width)

  const addQuantity = (id, index) => {
    const newCartData = cartData.map((sneaker, i) => {
      if (sneaker.id === id && i === index) {
        return { ...sneaker, quantity: sneaker.quantity + 1 }
      } else {
        return sneaker
      }
    })
    setCartData(newCartData)
  }

  const decreaseQuantity = (id, index) => {
    const newCartData = cartData.map((sneaker, i) => {
      if (sneaker.id === id && i === index) {
        if (sneaker.quantity === 1) {
          return sneaker
        }
        return { ...sneaker, quantity: sneaker.quantity - 1 }
      } else {
        return sneaker
      }
    })
    setCartData(newCartData)
  }

  const handleDelete = (sneaker) => {
    const cartDataFiltred = cartData.filter((item) => {
      if (
        item.id === sneaker.id &&
        item.size === sneaker.size &&
        item.color === sneaker.color
      ) {
        return null
      } else {
        return sneaker
      }
    })
    setCartData(cartDataFiltred)
  }

  return cartData.map((cartItem, i) => {
    return (
      <div
        className='cart-item'
        key={i}
      >
        <div className='item-image'>
          <img
            src={cartItem.imageUrl}
            alt='good-pic'
          />
        </div>
        <div className='item-header'>
          <Link
            className='header-title'
            to={`/products/${cartItem.id}`}
          >
            {cartItem.title}
            {width <= 575 && (
              <span>
                {' '}
                ({cartItem.color} / {cartItem.size})
              </span>
            )}
          </Link>
          {width > 575 && (
            <div className='header-sizecolor'>
              <span>
                Цвет: {cartItem.color} / Размер: {cartItem.size}
              </span>
            </div>
          )}
          {width <= 575 && (
            <div className='item-total'>
              {cartItem.price * cartItem.quantity} руб.
            </div>
          )}
          {width < 576 && (
            <ItemCounter
              decreaseQuantity={decreaseQuantity}
              addQuantity={addQuantity}
              id={cartItem.id}
              index={i}
              quantity={cartItem.quantity}
            />
          )}
        </div>
        {width > 575 && (
          <ItemCounter
            decreaseQuantity={decreaseQuantity}
            addQuantity={addQuantity}
            id={cartItem.id}
            index={i}
            quantity={cartItem.quantity}
          />
        )}
        {width > 575 && (
          <div className='item-total'>
            {cartItem.price * cartItem.quantity} руб.
          </div>
        )}
        <div
          className='item-delete'
          onClick={() => handleDelete(cartItem)}
        >
          <div className='delete-icon'>
            <AiOutlineDelete />
          </div>
        </div>
      </div>
    )
  })
}

export default CartItem
