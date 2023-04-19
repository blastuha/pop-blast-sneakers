import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown({
  menu,
  open,
  onChangeBrand,
  onChangeOpen,
  onChangeShoesType,
  onChangeSex,
}) {
  return (
    <div
      className='dropdown'
      style={{ display: open ? 'block' : 'none' }}
    >
      {menu.map((item, i) => {
        return (
          <div
            key={i}
            className='dropdown__content'
          >
            <Link
              to='/'
              className='dropdown__content-item'
              onClick={() => {
                onChangeBrand(item)
                onChangeOpen()
                onChangeShoesType(item)
                onChangeSex(item)
              }}
            >
              {item}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Dropdown
