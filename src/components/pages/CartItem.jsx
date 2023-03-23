import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../../App'
import { AiOutlineDelete } from 'react-icons/ai'

function CartItem() {
  const cartData = useContext(appContext).cartData
  const setCartData = useContext(appContext).setCartData
  const selectSize = useContext(appContext).selectSize
  const selectColor = useContext(appContext).selectColor

  const addQuantity = (id) => {
    const newCartData = cartData.map((sneaker) => {
      if (sneaker.id === id) {
        const newSneaker = { ...sneaker, quantity: sneaker.quantity + 1 }
        return newSneaker
      } else {
        return sneaker
      }
    })
    setCartData(newCartData)
  }

  const decreaseQuantity = (id) => {
    const newCartData = cartData.map((sneaker) => {
      if (sneaker.id === id) {
        const newSneaker = { ...sneaker, quantity: sneaker.quantity - 1 }
        if (newSneaker.quantity <= 0) {
          return sneaker
        } else return newSneaker
      } else {
        return sneaker
      }
    })
    setCartData(newCartData)
  }

  const handleDelete = (id) => {
    const cartDataFiltred = cartData.filter((sneaker) => sneaker.id !== id)
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
              Цвет: {selectColor} / Размер: {selectSize}
            </span>
          </div>
        </div>
        <div className='item-counter'>
          <div className='counter'>
            <button
              className='counter-button'
              onClick={() => {
                decreaseQuantity(cartItem.id)
              }}
            >
              -
            </button>
            <input
              type='text'
              value={cartItem.quantity}
              className='counter-input'
            />
            <button
              className='counter-button'
              onClick={() => addQuantity(cartItem.id)}
            >
              +
            </button>
          </div>
        </div>
        <div className='item-total'>{cartItem.price * cartItem.quantity}</div>
        <div
          className='item-delete'
          onClick={() => handleDelete(cartItem.id)}
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
