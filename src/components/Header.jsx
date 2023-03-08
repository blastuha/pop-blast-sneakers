import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

const menu = ['Доставка и оплата', 'Контакты']

function _Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__menu'>
          <div className='header__menu-left'>
            {menu.map((item) => {
              return <div className='header__menu-item'>{item}</div>
            })}
          </div>
          <div className='header__menu-right'>
            <div className='header__menu-item'>Доставка с 8:00 до 23:00</div>
            <a
              href='mailto:shop@crossking.ru'
              className='header__menu-item'
            >
              shevnin.boris2@yandex.ru
            </a>
          </div>
        </div>
        <div className='header__bottom'>
          <div className='header__bottom-logo'>
            <h1 className='header__bottom-logo-text'>POP BLAST SNEAKERS</h1>
          </div>
          <div className='header__bottom-search'>
            <input
              type='text'
              className='header__bottom-search-input'
              placeholder='Поиск'
            />
            <CiSearch className='header__bottom-search-icon' />
          </div>
          <div className='header__bottom-icons'>
            <BsFillPersonFill className='header__bottom-icons-icon' />
            <FaShoppingCart className='header__bottom-icons-icon' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default _Header
