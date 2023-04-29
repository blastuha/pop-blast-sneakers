import React, { useEffect } from 'react'

import { useLoaderData } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import {
  setSelectedSize,
  setSelectedColor,
} from '../../redux/slices/productSlice'

function Selects() {
  const dispatch = useDispatch()
  const selectedSize = useSelector((state) => state.product.selectedSize)
  const selectedColor = useSelector((state) => state.product.selectedColor)

  const sneakerDTO = useLoaderData().data
  const colors = useLoaderData().data.color
  const sizes = useLoaderData().data.sizes

  const onChangeSize = (event) => {
    dispatch(setSelectedSize(event.target.value))
  }

  const onChangeColor = (event) => {
    dispatch(setSelectedColor(event.target.value))
  }

  useEffect(() => {
    dispatch(setSelectedSize(sneakerDTO.sizes[0]))
    dispatch(setSelectedColor(sneakerDTO.color[0]))
  }, [dispatch, sneakerDTO.sizes, sneakerDTO.color])

  return (
    <div className='selects'>
      {colors && (
        <div className='select-item'>
          <label>Цвет</label>
          <select
            name='color'
            id='color-select'
            value={selectedColor}
            onChange={(e) => onChangeColor(e)}
          >
            {colors.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </select>
        </div>
      )}
      {sizes && (
        <div className='select-item'>
          <label>Размер</label>
          <select
            name='size'
            id='size-select'
            value={selectedSize}
            onChange={(e) => onChangeSize(e)}
          >
            {sizes.map((size, i) => (
              <option key={i}>{size}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}

export default Selects
