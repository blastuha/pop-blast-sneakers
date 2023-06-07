import React from 'react'
import styles from './mobileBottomSearch.module.scss'

import useActions from '../../hooks/useActions'
import useAutoFocus from '../../hooks/useAutoFocus'
import useInputValue2 from '../../hooks/useInputValue2'
import useCombinedRefs from '../../hooks/useCombinedRefs'

import SearchResult from '../SearchResult/SearchResult'
import SearchInput from '../SearchInput/SearchInput'
import { VscClose } from 'react-icons/vsc'

const MobileBottomSearch = ({ searchWindowOpen }) => {
  const { setSearchWindowOpen } = useActions()
  const { inputRef, value } = useInputValue2()
  const focusRef = useAutoFocus()
  const cbRef = useCombinedRefs(inputRef, focusRef)

  const searchStyles = searchWindowOpen
    ? `${styles.search} ${styles.active}`
    : `${styles.search}`

  return (
    <div className={searchStyles}>
      <div className={styles.search__input}>
        <input
          type='text'
          placeholder='Поиск'
          ref={cbRef}
          // autoFocus
        ></input>
        <VscClose onClick={() => setSearchWindowOpen(false)} />
      </div>
      <SearchResult
        bottomsearch='true'
        setSearchWindowOpen={setSearchWindowOpen}
        value={value}
      />
    </div>
  )
}

export default MobileBottomSearch
