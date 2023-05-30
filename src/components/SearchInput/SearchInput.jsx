import React from 'react'
import styles from './searchInput.module.scss'
import { CiSearch } from 'react-icons/ci'

const SearchInput = React.forwardRef(({ attr }, ref) => {
  return (
    <div
      className={styles.search}
      mobile={attr}
    >
      <input
        type='text'
        placeholder='Поиск'
        ref={ref}
      />
      <CiSearch />
    </div>
  )
})

export default SearchInput
