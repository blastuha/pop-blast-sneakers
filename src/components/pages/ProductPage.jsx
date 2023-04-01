import React, { useEffect, useContext, useState, useCallback } from 'react'
import axios from 'axios'

import { useLoaderData } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import { appContext } from '../../App'

import Select from '../Select'
import Breadcrumb from '../Breadcrumb'
import AllAlerts from '../AllAlerts'

function ProductPage() {
  const [alertsList, setAlertsList] = useState([])

  const alert = {
    id: alertsList.length + 1,
    text: '✓ Товар добавлен в корзину',
  }

  const sneakerDTO = useLoaderData() // data transfer object
  const addToCart = useContext(appContext).addToCart
  const selectedSize = useContext(appContext).selectedSize
  const setSelectedSize = useContext(appContext).setSelectedSize
  const selectedColor = useContext(appContext).selectedColor
  const setSelectedColor = useContext(appContext).setSelectedColor
  const onChangeSize = useContext(appContext).onChangeSize
  const onChangeColor = useContext(appContext).onChangeColor

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  useEffect(() => {
    setSelectedSize(sneakerDTO.data.sizes[0])
    setSelectedColor(sneakerDTO.data.color[0])
  }, [])

  const deleteShownAlert = useCallback(
    (id) => {
      const alertsListFiltred = alertsList.filter((item) => item.id !== id)
      setAlertsList(alertsListFiltred)
    },
    [alertsList]
  )

  const showCartAlert = (item) => {
    setAlertsList([...alertsList, item])
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (alertsList.length) {
        deleteShownAlert(alertsList[0].id)
      }
    }, 1100)

    return () => {
      clearInterval(interval)
    }
  }, [alertsList, deleteShownAlert])

  return (
    <div className='product'>
      <div className='product__container'>
        <Breadcrumb sneakerDTO={sneakerDTO} />
        <div className='product__main'>
          <AllAlerts alertsList={alertsList} />
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
                  onChangeSize={onChangeSize}
                  selectedSize={selectedSize}
                  selectedColor={selectedColor}
                  onChangeColor={onChangeColor}
                />
              </div>
              <div className='info-buttons'>
                <button
                  type='button'
                  className='info-btn cart'
                  onClick={() => {
                    addToCart(sneakerDTO.data)
                    showCartAlert(alert)
                  }}
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
