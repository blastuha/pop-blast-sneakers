import React from 'react'
import styles from './searchInput.module.scss'
import useWidth from '../../hooks/useWidth'
import useInputValue from '../../hooks/useInputValue'
import { CiSearch } from 'react-icons/ci'
import SearchResult from '../SearchResult/SearchResult'

const SearchInput = ({ attr }) => {
  const { inputRef } = useInputValue()
  const width = useWidth()

  return (
    <div
      className={styles.search}
      mobile={attr}
    >
      <div className={styles.search__container}>
        <input
          type='text'
          placeholder='Поиск'
          ref={inputRef}
        />
        {/* {width <= 767 && <SearchResult />} */}
        {/* <SearchResult /> */}
      </div>
      <CiSearch />
    </div>
  )
}

export default SearchInput
