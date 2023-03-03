import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

function _Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <h1 className='header__logo__text'>POP BLAST SNEAKERS</h1>
        </div>
        <div className='header__search'>
          <input
            type='text'
            className='header__search-input'
            placeholder='Поиск'
          />
          <CiSearch className='header__search-icon' />
        </div>
        <div className='header__icons'>
          <BsFillPersonFill className='header__icons__icon' />
          <FaShoppingCart className='header__icons__icon' />
        </div>
      </div>
    </header>
  )
}

export default _Header
