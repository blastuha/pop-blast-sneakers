import React, { useState, useEffect, useRef } from 'react'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'

import { CiSearch } from 'react-icons/ci'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'

import Cutlist from '../../Header/Cutlist'
import {headerMenu} from "../../../data";

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
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__menu}>
          <div className={styles.header__menu__left}>
            {headerMenu
              .filter((item, i) => i < 2)
              .map((item, i) => {
                return (
                  <Link
                    key={i}
                    to={item.link}
                    className={styles.header__menu__item}
                  >
                    <div className={styles.header__menu__item__text}>{item.name}</div>
                  </Link>
                )
              })}
            <div className={styles.header__menu__item}>
              <div
                className={styles.header__menu__item__text}
                ref={cutlistRef}
              >
                <BsThreeDots
                  className={styles.icon}
                  onClick={handleOpen}
                />
              </div>
              {cutlistOpen && <Cutlist headerMenu={headerMenu} />}
            </div>
          </div>
          <div className={styles.header__menu__right}>
            <div className={styles.header__menu__item}>
              <div className={`${styles.header__menu__item__textDelivery} ${styles.delivery}`}>
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
          <div className={styles.header__bottom__searchBlock}>
            <input
              type='text'
              placeholder='Поиск'
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
