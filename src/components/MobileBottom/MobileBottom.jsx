import React from 'react'
import styles from './mobileBottom.module.scss'
import { Link } from 'react-router-dom'

import { FaShoppingCart } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'

const nav__bottom = [
  { text: 'Главная', icon: <AiFillHome />, link: '/', searchOpen: 'close' },
  {
    text: 'Поиск',
    icon: <FaSearch />,
    link: '',
    searchOpen: 'open',
  },
  {
    text: 'Корзина',
    icon: <FaShoppingCart />,
    link: '/cart',
    searchOpen: 'close',
  },
  {
    text: 'Избранное',
    icon: <MdFavorite />,
    link: '/favourites',
    searchOpen: 'close',
  },
  {
    text: 'Профиль',
    icon: <BsFillPersonFill />,
    link: '/auth',
    searchOpen: 'close',
  },
]

const MobileBottom = ({ openSearchWindow, closeSearchWindow }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>
        {nav__bottom.map((item) => {
          return (
            <button
              className={styles.nav__item}
              onClick={
                item.searchOpen === 'open'
                  ? openSearchWindow
                  : closeSearchWindow
              }
            >
              <Link to={item.link}>
                {item.icon}
                <span>{item.text}</span>
              </Link>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileBottom
