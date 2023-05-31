import React from 'react'
import styles from './searchResult.module.scss'
import { useSelector } from 'react-redux'
import { sneakers } from '../../redux/slices/sneakers/selectors'
import useInputValue from '../../hooks/useInputValue'

const SearchResult = () => {
  const sneakersList = useSelector(sneakers)
  const { value } = useInputValue()
  const sneakersFiltered = sneakersList.filter((sneaker) =>
    sneaker.title.toLowerCase().includes(value.toLowerCase().trim())
  )

  return (
    <div className={styles.result}>
      {sneakersFiltered.map((sneaker, i) => {
        if (value === '') {
          return null
        }
        return <span key={i}>{sneaker.title}</span>
      })}
    </div>
  )
}

export default SearchResult
