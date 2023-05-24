import React from 'react'
import styles from './mobileBottomSearch.module.scss'
import { VscClose } from 'react-icons/vsc'

const MobileBottomSearch = ({ searchWindow, closeSearchWindow }) => {
  const searchStyles = searchWindow
    ? `${styles.search} ${styles.active}`
    : `${styles.search}`
  return (
    <div className={searchStyles}>
      <form
        action='/search'
        method='get'
        className={styles.search__input}
      >
        <input
          type='text'
          placeholder='Поиск'
        ></input>
        <VscClose onClick={closeSearchWindow} />
      </form>
      <div className='search__result'></div>
    </div>
  )
}

export default MobileBottomSearch
