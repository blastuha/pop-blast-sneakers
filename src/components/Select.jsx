import React from 'react'

function Select({ color, sizes }) {
  return (
    <div className='selections'>
      {color && (
        <div className='select-item'>
          <label>Цвет</label>
          <select
            name='color'
            id='color-select'
          >
            <option value='white'>{color}</option>
          </select>
        </div>
      )}
      {sizes && (
        <div className='select-item'>
          <label>Размер</label>
          <select
            name='size'
            id='size-select'
          >
            {sizes.map((size) => (
              <option value='white'>{size}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}

export default Select
