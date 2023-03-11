import React from 'react'

function Select({ color, sizes }) {
  console.log(sizes)
  return (
    <div className='select-item'>
      <label>Цвет</label>
      <select
        name='color'
        id='color-select'
      >
        <option value='white'>{color}</option>
      </select>
    </div>
  )
}

export default Select
