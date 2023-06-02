import React from 'react'
import { Link } from 'react-router-dom'
import styles from './searchResult.module.scss'
import { useSelector } from 'react-redux'
import { sneakers } from '../../redux/slices/sneakers/selectors'
import useInputValue from '../../hooks/useInputValue'
import useActions from '../../hooks/useActions'

const SearchResult = ({ bottomSearch }) => {
  const { handleMobileMenu } = useActions()
  const sneakersList = useSelector(sneakers)
  const { value } = useInputValue()
  const sneakersFiltered = sneakersList.filter((sneaker) =>
    sneaker.title.toLowerCase().includes(value.toLowerCase().trim())
  )

  return (
    <div className={`${styles.result} ${bottomSearch && bottomSearch}`}>
      {sneakersFiltered.map((sneaker, i) => {
        if (value === '') {
          return null
        }
        return (
          <Link
            key={i}
            onClick={handleMobileMenu}
            to={`products/${sneaker.id}`}
            className={styles.result__link}
          >
            <span key={i}>{sneaker.title}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default SearchResult
