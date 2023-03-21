import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import Select from '../Select'
import { AiOutlineHeart } from 'react-icons/ai'
import Breadcrumb from '../Breadcrumb'
import { appContext } from '../../App'

function ProductPage() {
  const [cartData, setCartData] = useState([])
  const sneakerDTO = useLoaderData() // data transfer object

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const addToCart = (sneakerObj) => {
    const findIndex = cartData.findIndex((obj) => obj.id === sneakerObj.id)

    if (findIndex >= 0) {
      const newCartData = cartData.map((cartItem, index) => {
        if (findIndex === index) {
          console.log(cartItem)
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        } else {
          return cartItem
        }
      })
      setCartData(newCartData)
    } else {
      const newObj = { ...sneakerObj, quantity: 1 }
      setCartData([...cartData, newObj])
      console.log('товара не было в корзине')
    }
  }

  console.log(cartData)

  // console.log(findIndex)
  // cartData[findIndex].quantity = cartData[findIndex].quantity + 1
  // console.log('товар был в корзине', cartData)
  // return
  //-----------

  return (
    <div className='product'>
      <div className='product__container'>
        <Breadcrumb sneakerDTO={sneakerDTO} />
        <div className='product__main'>
          <div className='product__photo'>
            <img
              src={sneakerDTO.data.imageUrl}
              alt='sneaker'
            />
          </div>
          <form
            action='/'
            method='post'
            className='product__info'
          >
            <div className='info__items'>
              <div className='info-item'>
                <div className='info-header'>
                  <div className='info-title'>{sneakerDTO.data.title}</div>
                  <div className='info-price'>{sneakerDTO.data.price} руб.</div>
                </div>
              </div>
              <div className='info-item'>
                <Select
                  color={sneakerDTO.data.color}
                  sizes={sneakerDTO.data.sizes}
                />
              </div>
              <div className='info-buttons'>
                <button
                  type='button'
                  className='info-btn cart'
                  onClick={() => addToCart(sneakerDTO.data)}
                >
                  В корзину
                </button>
                <button
                  type='button'
                  className='info-btn'
                >
                  <AiOutlineHeart className='heart' />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className='product__description'>
          <div className='description-item'>
            <div className='description-title'>Описание</div>
            <div className='description-text'>
              {sneakerDTO.data.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const productLoader = async ({ request, params }) => {
  return axios
    .get(`https://63fcd20c859df29986c57847.mockapi.io/sneakerpal/${params.id}`)
    .catch((res) => console.warn(res))
}

export default ProductPage
export { productLoader }
