import React from 'react'
import styles from './searchInput.module.scss'

import { CiSearch } from 'react-icons/ci'
import SearchResult from '../SearchResult/SearchResult'

import useWidth from '../../hooks/useWidth'
import useInputValue2 from '../../hooks/useInputValue2'
import useAutoFocus from '../../hooks/useAutoFocus'
import useCombinedRefs from '../../hooks/useCombinedRefs'

const SearchInput = ({ attr }) => {
  //* происходит 2 ререндера при вводе текста - как это убрать?

  const { value, onChange } = useInputValue2()
  const focusRef = useAutoFocus()
  const width = useWidth()
  const isFocusRequared = width < 767 ? focusRef : null

  console.log(value)

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
        {width <= 767 && <SearchResult value={value} />}
      </div>
      <CiSearch />
    </div>
  )
}

export default SearchInput
