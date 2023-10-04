/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiFillHeart } from 'react-icons/ai'

import Cutlist from '../../Cutlist/Cutlist'
import SearchInput from '../../SearchInput/SearchInput'
import { headerMenu } from '../../../data'

import useClickOutside from '../../../hooks/useClickOutside'
import useActions from '../../../hooks/useActions'

import styles from './header.module.scss'

function Header() {
  const { open, itemRef, handleOpen } = useClickOutside(false)
  const { handleMobileMenu } = useActions()

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__menu}>
          <div className={styles.header__menu__left}>
            {headerMenu
              .filter((_, i) => i < 2)
              .map((item, i) => {
                return (
                  <Link
                    key={i}
                    to={item.link}
                    className={styles.header__menu__item}
                  >
                    <div className={styles.header__menu__item__text}>
                      {item.name}
                    </div>
                  </Link>
                )
              })}
            <div className={styles.header__menu__item}>
              <div
                className={styles.header__menu__item__text}
                ref={itemRef}
              >
                <BsThreeDots
                  className={styles.icon}
                  onClick={handleOpen}
                />
              </div>
              {open && <Cutlist headerMenu={headerMenu} />}
            </div>
          </div>
          <div className={styles.header__menu__right}>
            <div className={styles.header__menu__item}>
              <div className={styles.header__menu__item__textDelivery}>
                Доставка с 8:00 до 23:00
              </div>
            </div>
            <div className={styles.header__menu__item}>
              <a
                href='mailto:shevnin.boris2@gmail.com'
                className={styles.header__menu__item__text}
              >
                shevnin.boris2@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className={styles.header__bottom}>
          <RxHamburgerMenu
            className={styles.burger}
            onClick={() => {
              handleMobileMenu()
            }}
          />
          <div className={styles.header__bottom__logo}>
            <h1>POP BLAST SNEAKERS</h1>
          </div>
          <Link to='/cart'>
            <FaShoppingCart className={styles.cart__mobile} />
          </Link>
          <SearchInput />
          <div className={styles.header__bottom__icons}>
            <Link
              to='/auth'
              className={styles.link}
            >
              <BsFillPersonFill className={styles.link__icon} />
            </Link>
            <Link
              to='favourites'
              className={styles.link}
            >
              <AiFillHeart className={styles.link__icon} />
            </Link>
            <Link
              to='cart'
              className={styles.link}
            >
              <FaShoppingCart className={styles.link__icon} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
