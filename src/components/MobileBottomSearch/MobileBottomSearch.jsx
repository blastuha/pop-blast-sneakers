import React from 'react'
import styles from './mobileBottomSearch.module.scss'
import useActions from '../../hooks/useActions'
import useInputValue from '../../hooks/useInputValue'
import { VscClose } from 'react-icons/vsc'
import SearchResult from '../SearchResult/SearchResult'

const MobileBottomSearch = ({ searchWindowOpen }) => {
  const { inputRef, value } = useInputValue()
  console.log(inputRef)
  console.log(value)
  const { setSearchWindowOpen } = useActions()
  const searchStyles = searchWindowOpen
    ? `${styles.search} ${styles.active}`
    : `${styles.search}`

  return (
    <div className={searchStyles}>
      <div className={styles.search__input}>
        <input
          type='text'
          placeholder='Поиск'
          ref={inputRef}
        ></input>
        <VscClose onClick={() => setSearchWindowOpen(false)} />
      </div>
      <SearchResult />
    </div>
  )
}

export default MobileBottomSearch
