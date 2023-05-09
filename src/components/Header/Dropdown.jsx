import React from 'react'
import { Link } from 'react-router-dom'
import {
  onChangeBrand,
  onChangeShoesType,
  onChangeSex,
} from '../../redux/slices/categoriesSlice'
import { useDispatch } from 'react-redux'

function Dropdown({ menu, open, onChangeOpen }) {
  const dispatch = useDispatch()
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
                dispatch(onChangeBrand(item))
                dispatch(onChangeShoesType(item))
                dispatch(onChangeSex(item))
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
