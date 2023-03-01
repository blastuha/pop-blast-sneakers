import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

function _Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <h1 className='header__logo'>POP BLAST SNEAKERS</h1>
        <div className='header__search'>
          <input
            type='text'
            className='header__search-input'
            placeholder='Поиск'
          />
          <CiSearch className='header__search-icon' />
        </div>
        <div className='header__icons'>
          <BsFillPersonFill className='header__icon' />
          <FaShoppingCart className='header__icon' />
        </div>
      </div>
    </header>
  )
}

export default _Header
