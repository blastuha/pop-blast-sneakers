import React from 'react'

function Selects({
  color,
  sizes,
  onChangeSize,
  onChangeColor,
  selectedColor,
  selectedSize,
}) {
  return (
    <div className='selects'>
      {color && (
        <div className='select-item'>
          <label>Цвет</label>
          <select
            name='color'
            id='color-select'
            value={selectedColor}
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
