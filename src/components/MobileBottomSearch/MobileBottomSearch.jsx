import React from 'react'
import styles from './mobileBottomSearch.module.scss'

import useActions from '../../hooks/useActions'
// import useAutoFocus from '../../hooks/useAutoFocus'
import useInputValue from '../../hooks/useInputValue'

import SearchResult from '../SearchResult/SearchResult'
import { VscClose } from 'react-icons/vsc'

const MobileBottomSearch = ({ searchWindowOpen }) => {
  const { setSearchWindowOpen } = useActions()
  const { inputRef } = useInputValue()
  // const searchRef = useAutoFocus()

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
      <SearchResult
        bottomsearch='true'
        setSearchWindowOpen={setSearchWindowOpen}
      />
    </div>
  )
}

export default MobileBottomSearch
