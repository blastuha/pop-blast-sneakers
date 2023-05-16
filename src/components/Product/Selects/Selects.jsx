import React, { useEffect } from 'react'
import styles from './selects.module.scss'

import { useLoaderData } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { cart } from '../../../redux/slices/cart/selectors'
import useActions from '../../../hooks/useActions'

function Selects() {
  const { selectedColor, selectedSize } = useSelector(cart)
  const { setSelectedSize, setSelectedColor } = useActions()

  const sneakerDTO = useLoaderData().data
  const colors = useLoaderData().data.color
  const sizes = useLoaderData().data.sizes

  useEffect(() => {
    setSelectedSize(sneakerDTO.sizes[0])
    setSelectedColor(sneakerDTO.color[0])
  }, [sneakerDTO.sizes, sneakerDTO.color, setSelectedSize, setSelectedColor])

  return (
    <div className={styles.selects}>
      {colors && (
        <div className={styles.selectItem}>
          <label>Цвет</label>
          <select
            name='color'
            id='color-select'
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            {colors.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </select>
        </div>
      )}
      {sizes && (
          <div className={styles.selectItem}>
          <label>Размер</label>
          <select
            name='size'
            id='size-select'
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
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
