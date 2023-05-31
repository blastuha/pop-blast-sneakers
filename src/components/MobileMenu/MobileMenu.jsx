import React, { useState } from 'react'
import styles from './mobileMenu.module.scss'
import { headerMenu } from '../../data'
import MobileMenuFoooter from '../MobileMenuFooter/MobileMenuFoooter'
import SearchInput from '../SearchInput/SearchInput'

import { VscClose } from 'react-icons/vsc'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import SearchResult from '../SearchResult/SearchResult'

const iconsLinksBurger = [
  { icon: <BsFillPersonFill />, link: '/auth' },
  { icon: <AiFillHeart />, link: '/favourites' },
  { icon: <FaShoppingCart />, link: '/cart' },
]

const MobileMenu = ({ onChangeOpen, open }) => {
  const [openSearch, setOpenSearch] = useState(false)

  const menuStyles = open ? `${styles.menu} ${styles.active}` : `${styles.menu}`

  const onChangeSearch = () => {
    setOpenSearch(!openSearch)
  }

  return (
    <div className={menuStyles}>
      <div className={styles.close__section}>
        <VscClose onClick={onChangeOpen} />
      </div>
      <div className={styles.icons__section}>
        {openSearch ? (
          <>
            <SearchInput attr='true' />
            <div className={styles.searchClosing}>
              <VscClose onClick={onChangeSearch} />
            </div>
          </>
        ) : (
          <>
            <nav className={styles.section__controls}>
              {iconsLinksBurger.map((item, i) => {
                return (
                  <Link
                    key={i}
                    to={item.link}
                  >
                    {item.icon}
                  </Link>
                )
              })}
            </nav>
            <div className={styles.section__search}>
              <CiSearch onClick={onChangeSearch} />
            </div>
          </>
        )}
        <SearchResult />
      </div>
      <div className={styles.menu__content}>
        <div className={styles.menu__header}>Меню</div>
        <ul className={styles.menu__list}>
          {headerMenu.map((item, i) => {
            return (
              <li key={i}>
                <a href={item.link}>{item.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
      <MobileMenuFoooter />
    </div>
  )
}

export default MobileMenu
