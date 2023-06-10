import React from 'react'
import styles from './mobileBottom.module.scss'
import { Link } from 'react-router-dom'
import useActions from '../../hooks/useActions'
import { nav__bottom } from '../../data'

const MobileBottom = () => {
  const { setSearchWindowOpen } = useActions()

  const handleSearchWindow = (item) => {
    return item === 'open'
      ? () => setSearchWindowOpen(true)
      : () => setSearchWindowOpen(false)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>
        {nav__bottom.map((item, i) => {
          return (
            <button
              key={i}
              className={styles.nav__item}
              onClick={handleSearchWindow(item.searchOpen)}
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
