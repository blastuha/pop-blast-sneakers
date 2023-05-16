import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { CiSearch } from 'react-icons/ci'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'

import Cutlist from '../Header/Cutlist'

const headerMenu = [
  { name: 'Главная', link: '/' },
  { name: 'Контакты', link: '/contacts' },
  { name: 'Доставка и оплата', link: '/delivery' },
  { name: 'Возврат и обмен', link: '/return' },
  { name: 'О нас', link: '/about' },
]

function Header() {
  const [cutlistOpen, setCutlistOpen] = useState(false)

  const cutlistRef = useRef()

  useEffect(() => {
    if (!cutlistOpen) {
      return
    }

    window.addEventListener('click', (event) => {
      if (!cutlistRef.current.contains(event.target)) {
        setCutlistOpen(false)
      }
    })
  }, [cutlistOpen])

  const handleOpen = () => {
    setCutlistOpen(!cutlistOpen)
  }

  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__menu'>
          <div className='header__menu-left'>
            {headerMenu
              .filter((item, i) => i < 2)
              .map((item, i) => {
                return (
                  <Link
                    key={i}
                    to={item.link}
                    className='header__menu-item'
                  >
                    <div className='header__menu-item-text'>{item.name}</div>
                  </Link>
                )
              })}
            <div className='header__menu-item'>
              <div
                className='header__menu-item-text'
                ref={cutlistRef}
              >
                <BsThreeDots
                  className='icon'
                  onClick={handleOpen}
                />
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
            <Link
              to='/auth'
              className='link'
            >
              <BsFillPersonFill className='link-icon' />
            </Link>
            <Link
              to='cart'
              className='link'
            >
              <FaShoppingCart className='link-icon' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
