import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { mobileMenuSearch } from '../../redux/slices/mobileMenu/selectors'

import MobileMenuFoooter from '../MobileMenuFooter/MobileMenuFoooter'
import SearchInput from '../SearchInput/SearchInput'

import { VscClose } from 'react-icons/vsc'
import { CiSearch } from 'react-icons/ci'

import useActions from '../../hooks/useActions'
import { headerMenu } from '../../data'
import { burgerMenuLinks } from '../../data'

import styles from './mobileMenu.module.scss'

const MobileMenu = ({ mobileMenuOpen }) => {
  const { handleMobileMenu, setMobileMenuSearchOpen, setGlobalInputValue } =
    useActions()

  const mobileMenuSearchOpen = useSelector(mobileMenuSearch)
  console.log('mobileMenuSearchOpen', mobileMenuSearchOpen)

  const menuStyles = mobileMenuOpen
    ? `${styles.menu} ${styles.active}`
    : `${styles.menu}`

  return (
    <div className={menuStyles}>
      <div className={styles.close__section}>
        <VscClose
          onClick={() => {
            handleMobileMenu()
            setMobileMenuSearchOpen(false)
            setGlobalInputValue('')
          }}
        />
      </div>
      <div className={styles.icons__section}>
        {mobileMenuSearchOpen ? (
          <>
            <SearchInput attr='true' />
            <div className={styles.searchClosing}>
              <VscClose
                onClick={() => {
                  setMobileMenuSearchOpen(false)
                  setGlobalInputValue('')
                }}
              />
            </div>
          </>
        ) : (
          <>
            <nav className={styles.section__controls}>
              {burgerMenuLinks.map((item, i) => {
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
              <CiSearch
                onClick={() => {
                  setMobileMenuSearchOpen(true)
                  setGlobalInputValue('')
                }}
              />
            </div>
          </>
        )}
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
