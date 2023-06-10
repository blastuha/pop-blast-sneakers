import React from 'react'
import styles from './searchInput.module.scss'

import { CiSearch } from 'react-icons/ci'
import SearchResult from '../SearchResult/SearchResult'

import useWidth from '../../hooks/useWidth'
import useInputValue from '../../hooks/useInputValue'
import useAutoFocus from '../../hooks/useAutoFocus'

const SearchInput = ({ attr }) => {
  const { value, onChange, globalInputValue } = useInputValue()
  const inputRef = useAutoFocus()
  const width = useWidth()
  const isFocusRequared = width < 767 ? inputRef : null

  return (
    <div
      className={styles.search}
      mobile={attr}
    >
      <div className={styles.search__container}>
        <input
          type='text'
          placeholder='Поиск'
          value={value}
          onChange={onChange}
          ref={isFocusRequared}
        />
        {width <= 767 && <SearchResult value={globalInputValue} />}
      </div>
      <CiSearch />
    </div>
  )
}

export default SearchInput
