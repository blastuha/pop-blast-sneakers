import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../../App'
import { AiOutlineDelete } from 'react-icons/ai'

function CartItem() {
  const cartData = useContext(appContext).cartData
  const setCartData = useContext(appContext).setCartData

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
          </Link>
          <div className='header-sizecolor'>
            <span>
              Цвет: {cartItem.color} / Размер: {cartItem.size}
            </span>
          </div>
        </div>
        <div className='item-counter'>
          <div className='counter'>
            <button
              className='counter-button'
              onClick={() => {
                decreaseQuantity(cartItem.id, i)
              }}
            >
              -
            </button>
            <div className='counter-value'>
              <span
                type='text'
                value={cartItem.quantity}
              >
                {cartItem.quantity}
              </span>
            </div>
            <button
              className='counter-button'
              onClick={() => addQuantity(cartItem.id, i)}
            >
              +
            </button>
          </div>
        </div>
        <div className='item-total'>
          {cartItem.price * cartItem.quantity} руб.
        </div>
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