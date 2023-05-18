import React from 'react'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'

import { CiSearch } from 'react-icons/ci'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'

import Cutlist from '../../Header/Cutlist'
import { headerMenu } from '../../../data'
import useInputValue from '../../../hooks/useInputValue'
import useClickOutside from '../../../hooks/useClickOutside'

function Header() {
  const { open, itemRef, handleOpen } = useClickOutside(false)
  const { inputRef } = useInputValue()

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
                href='mailto:shop@crossking.ru'
                className={styles.header__menu__item__text}
              >
                shevnin.boris2@yandex.ru
              </a>
            </div>
          </div>
        </div>
        <div className={styles.header__bottom}>
          <div className={styles.header__bottom__logo}>
            <h1>POP BLAST SNEAKERS</h1>
          </div>
          <RxHamburgerMenu className={styles.burger} />
          <div className={styles.header__bottom__searchBlock}>
            <input
              type='text'
              placeholder='Поиск'
              ref={inputRef}
            />
            <CiSearch />
          </div>
          <div className={styles.header__bottom__icons}>
            <Link
              to='/auth'
              className={styles.link}
            >
              <BsFillPersonFill className={styles.link__icon} />
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
