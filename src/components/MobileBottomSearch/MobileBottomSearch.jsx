import React from 'react'

import { useSelector } from 'react-redux'

import SearchResult from '../SearchResult/SearchResult'
import { VscClose } from 'react-icons/vsc'

import useActions from '../../hooks/useActions'
import useAutoFocus from '../../hooks/useAutoFocus'
import useInputValue from '../../hooks/useInputValue'
import { mobileMenu } from '../../redux/slices/mobileMenu/selectors'

import styles from './mobileBottomSearch.module.scss'

const MobileBottomSearch = () => {
  const { searchWindowOpen } = useSelector(mobileMenu)

  const { setSearchWindowOpen } = useActions()
  const { value, onChange, globalInputValue } = useInputValue()
  const inputRef = useAutoFocus()

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
          value={value}
          onChange={onChange}
        ></input>
        <VscClose onClick={() => setSearchWindowOpen(false)} />
      </div>
      <SearchResult
        bottomsearch='true'
        setSearchWindowOpen={setSearchWindowOpen}
        value={globalInputValue}
      />
    </div>
  )
}

export default MobileBottomSearch
