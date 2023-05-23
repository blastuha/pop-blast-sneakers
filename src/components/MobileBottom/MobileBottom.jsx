import React from 'react'
import styles from './mobileBottom.module.scss'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'

const nav__bottom = [
  { text: 'Главная', icon: <AiFillHome /> },
  { text: 'Поиск', icon: <FaSearch /> },
  { text: 'Корзина', icon: <FaShoppingCart /> },
  { text: 'Избранное', icon: <MdFavorite /> },
  { text: 'Профиль', icon: <BsFillPersonFill /> },
]

const MobileBottom = () => {
  return (
    <nav className={styles.nav}>
      {nav__bottom.map((item) => {
        return (
          <div className={styles.nav__item}>
            {item.icon}
            <span>{item.text}</span>
          </div>
        )
      })}
    </nav>
  )
}

export default MobileBottom
