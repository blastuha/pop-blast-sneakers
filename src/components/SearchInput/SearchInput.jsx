import React, { useRef, useCallback } from 'react'
import styles from './searchInput.module.scss'

import { CiSearch } from 'react-icons/ci'
import SearchResult from '../SearchResult/SearchResult'

import useWidth from '../../hooks/useWidth'
import useInputValue2 from '../../hooks/useInputValue'
import useAutoFocus from '../../hooks/useAutoFocus'

const SearchInput = ({ attr }) => {
  //* происходит 2 ререндера при вводе текста - как это убрать?

  const focusRef = useAutoFocus()
  const { inputRef } = useInputValue2()
  console.log(inputRef)
  const width = useWidth()

  const cbRef = useCallback(
    (el) => {
      inputRef.current = el
      focusRef.current = el
    },
    [inputRef, focusRef]
  )

  return (
    <div
      className={styles.search}
      mobile={attr}
    >
      <div className={styles.search__container}>
        <input
          type='text'
          placeholder='Поиск'
          ref={cbRef}
        />
        {width <= 767 && <SearchResult />}
      </div>
      <CiSearch />
    </div>
  )
}

export default SearchInput
