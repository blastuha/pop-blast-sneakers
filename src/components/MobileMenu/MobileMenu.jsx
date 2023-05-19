import React from 'react'
import styles from './mobileMenu.module.scss'
import { headerMenu } from '../../data'
import { VscClose } from 'react-icons/vsc'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'

const MobileMenu = ({ onChangeOpen, open }) => {
  const menuStyles = open ? `${styles.menu} ${styles.active}` : `${styles.menu}`

  return (
    <nav className={menuStyles}>
      <div className={styles.close__section}>
        <VscClose onClick={onChangeOpen} />
      </div>
      <div className={styles.icons__section}>
        <div>
          <BsFillPersonFill />
          <AiFillHeart />
          <FaShoppingCart />
        </div>
        <div>
          <CiSearch />
        </div>
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
    </nav>
  )
}

export default MobileMenu
