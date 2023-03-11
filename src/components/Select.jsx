import React from 'react'

function Select() {
  return (
    <div className='select-item'>
      <label>Цвет</label>
      <select
        name='color'
        id='color-select'
      >
        <option value='white'>Белый</option>
      </select>
    </div>
  )
}

export default Select
