import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

function Cart() {
  return (
    <div className='cart-block'>
      <div className='cart__container'>
        <div className='cart__header'>
          <div className='cart-title'>Корзина</div>
        </div>
        <div className='cart__main'>
          <div className='cart__items'>
            <div className='cart-item'>
              <div className='item-image'>
                <img
                  src='https://static.insales-cdn.com/r/WvM-a6seMTo/rs:fit:950:1187:1/q:100/plain/images/products/1/3145/643001417/118894836_1.jpg@webp'
                  alt='good-pic'
                />
              </div>
              <a
                className='item-title'
                href='/'
              >
                Tommy Hilfiger retro court trainer
              </a>
              <div className='item-counter'>
                <div className='counter'>
                  <button className='counter-button'>-</button>
                  <input
                    type='text'
                    value='1'
                    className='counter-input'
                  />
                  <button className='counter-button'>+</button>
                </div>
              </div>
              <div className='item-total'>1308 руб.</div>
              <div className='item-delete'>
                <div className='delete-icon'>
                  <AiOutlineDelete />
                </div>
              </div>
            </div>
            <div className='cart-item'>
              <div className='item-image'>
                <img
                  src='https://static.insales-cdn.com/r/WvM-a6seMTo/rs:fit:950:1187:1/q:100/plain/images/products/1/3145/643001417/118894836_1.jpg@webp'
                  alt='good-pic'
                />
              </div>
              <a
                className='item-title'
                href='/'
              >
                Tommy Hilfiger retro court trainer
              </a>
              <div className='item-counter'>
                <div className='counter'>
                  <button className='counter-button'>-</button>
                  <input
                    type='text'
                    value='1'
                    className='counter-input'
                  />
                  <button className='counter-button'>+</button>
                </div>
              </div>
              <div className='item-total'>1308 руб.</div>
              <div className='item-delete'>
                <div className='delete-icon'>
                  <AiOutlineDelete />
                </div>
              </div>
            </div>
          </div>
          <div className='cart__counter'>
            <div className='counter-total-sticky'>
              <div className='counter-total-items'>
                <span className='total-products'>Товары ( 1 )</span>
                <span className='total-price'>1308 руб.</span>
              </div>
              <div className='counter-total-price'>
                <div className='price-text'>Итого:</div>
                <div className='full-price'>1308 руб.</div>
              </div>
              <button
                type='submit'
                className='counter-btn'
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
