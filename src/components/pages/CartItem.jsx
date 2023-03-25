import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../../App'
import { AiOutlineDelete } from 'react-icons/ai'

function CartItem() {
  const cartData = useContext(appContext).cartData
  const setCartData = useContext(appContext).setCartData

  const addQuantity = (id, secondId) => {
    const newCartData = cartData.map((sneaker) => {
      if (sneaker.id === id && secondId === sneaker.secondId) {
        return { ...sneaker, quantity: sneaker.quantity + 1 }
      } else {
        return sneaker
      }
    })
    setCartData(newCartData)
  }

  const decreaseQuantity = (id, secondId) => {
    const newCartData = cartData.map((sneaker) => {
      if (sneaker.id === id && sneaker.secondId === secondId) {
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

  const handleDelete = (sneakerInCart) => {
    if (sneakerInCart.secondId) {
      const secondIdFilter = cartData.filter(
        (sneaker) => sneaker.secondId !== sneakerInCart.secondId
      )
      setCartData(secondIdFilter)
    } else {
      const idFilter = cartData.filter((sneaker) => {
        console.log(sneaker.secondId)
        return (
          sneaker.secondId !== sneakerInCart.secondId &&
          sneaker.id !== sneakerInCart.id
        )
      })
      setCartData(idFilter)
    }
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
            <div>id: {cartItem.id}</div>
            <div>secondId: {cartItem.secondId}</div>
          </div>
        </div>
        <div className='item-counter'>
          <div className='counter'>
            <button
              className='counter-button'
              onClick={() => {
                decreaseQuantity(cartItem.id, cartItem.secondId)
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
              onClick={() => addQuantity(cartItem.id, cartItem.secondId)}
            >
              +
            </button>
          </div>
        </div>
        <div className='item-total'>{cartItem.price * cartItem.quantity}</div>
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
