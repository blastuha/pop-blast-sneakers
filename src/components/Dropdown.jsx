import React from 'react'

function Dropdown({ menu, open }) {
  return (
    <div
      className='dropdown'
      style={{ display: open ? 'block' : 'none' }}
    >
      {menu.map((item) => {
        return (
          <div className='dropdown__content'>
            <div className='dropdown__content-item'>{item}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Dropdown
