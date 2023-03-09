import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Cutlist from './Cutlist'

const headerMenu = [
  { name: 'Главная', link: '/' },
  { name: 'Контакты', link: '/contacts' },
  { name: 'Доставка и оплата', link: '/delivery' },
  { name: 'Возврат и обмен', link: '/return' },
  { name: 'О нас', link: '/about' },
]

function _Header() {
  const [cutlistOpen, setCutlistOpen] = useState(true)

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__menu'>
          <div className='header__menu-left'>
            {headerMenu.map((item, i) => {
              if (i <= 1) {
                return (
                  <Link
                    to={item.link}
                    className='header__menu-item'
                  >
                    <div className='header__menu-item-text'>{item.name}</div>
                  </Link>
                )
              }
            })}
            <div className='header__menu-item'>
              <div className='header__menu-item-text'>
                <BsThreeDots className='icon' />
              </div>
              {cutlistOpen && <Cutlist headerMenu={headerMenu} />}
            </div>
          </div>
          <div className='header__menu-right'>
            <div className='header__menu-item'>
              <div className='header__menu-item-text--delivery'>
                Доставка с 8:00 до 23:00
              </div>
            </div>
            <div className='header__menu-item'>
              <a
                href='mailto:shop@crossking.ru'
                className='header__menu-item-text'
              >
                shevnin.boris2@yandex.ru
              </a>
            </div>
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
            <BsFillPersonFill className='icon' />
            <FaShoppingCart className='icon' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default _Header
