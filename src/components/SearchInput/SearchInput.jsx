import React from 'react'
import styles from './searchInput.module.scss'
import { useSelector } from 'react-redux'
import { sneakers } from '../../redux/slices/sneakers/selectors'
import { inputValue } from '../../redux/slices/input/selectors'
import useWidth from '../../hooks/useWidth'
import { CiSearch } from 'react-icons/ci'

const SearchInput = React.forwardRef(({ attr }, ref) => {
  // const sneakersList = useSelector(sneakers)
  // console.log(sneakersList)
  const searchValue = useSelector(inputValue)
  console.log(searchValue)
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
          ref={ref}
          autoFocus
        />
        {/* {width <= 767 && <div className={styles.result}></div>} */}
      </div>
      <CiSearch />
    </div>
  )
})

export default SearchInput
