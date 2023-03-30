import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'

import { useLoaderData } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import { appContext } from '../../App'

import Select from '../Select'
import Breadcrumb from '../Breadcrumb'
import AllAlerts from '../AllAlerts'

function ProductPage() {
  const [AllAlertsArr, setAllAlertsArr] = useState([])
  const [AllAlertsArrCopy, setAllAlertsArrCopy] = useState([])

  const copy = [...AllAlertsArr]

  useEffect(() => {
    setAllAlertsArrCopy([...AllAlertsArr])
    console.log(AllAlertsArrCopy)
  }, [AllAlertsArr])

  const alert = {
    id: Date.now(),
    text: '✓ Товар добавлен в корзину',
    wasShown: false,
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

  const changeAlertStatus = (item) => {
    item.wasShown = true
  }

  const deleteShownAlert = () => {
    copy.forEach((item) => {
      if (item.wasShown) {
        copy.splice(item)
        setAllAlertsArrCopy(copy)
      }
    })
  }

  const showCartAlert = (item) => {
    setAllAlertsArr([...AllAlertsArr, item])

    setTimeout(() => changeAlertStatus(item), 2100)
    setTimeout(() => deleteShownAlert(), 2200)
    console.log(item)
  }

  return (
    <div className='product'>
      <div className='product__container'>
        <Breadcrumb sneakerDTO={sneakerDTO} />
        <div className='product__main'>
          <AllAlerts AllAlertsArr={AllAlertsArr} />
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
