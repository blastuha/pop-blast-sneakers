import React from 'react'

function Select({
  color,
  sizes,
  onChangeSize,
  onChangeColor,
  selectColor,
  selectSize,
}) {
  return (
    <div className='selections'>
      {color && (
        <div className='select-item'>
          <label>Цвет</label>
          <select
            name='color'
            id='color-select'
            value={selectColor}
            onChange={(e) => onChangeColor(e)}
          >
            {color.map((item, i) => (
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
            value={selectSize}
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

export default Select
