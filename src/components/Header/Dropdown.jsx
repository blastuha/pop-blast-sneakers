import React from 'react'
import { Link } from 'react-router-dom'
import useActions from '../../hooks/useActions'

function Dropdown({ menu, open, onChangeOpen }) {
  const { onChangeBrand, onChangeShoesType, onChangeSex } = useActions()
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
                onChangeOpen()
                onChangeBrand(item)
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
