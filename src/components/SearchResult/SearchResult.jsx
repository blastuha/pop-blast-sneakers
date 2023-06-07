import React from 'react'
import styles from './searchResult.module.scss'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { sneakers } from '../../redux/slices/sneakers/selectors'
import { mobileMenu } from '../../redux/slices/mobileMenu/selectors'
import useActions from '../../hooks/useActions'

const SearchResult = ({ bottomsearch, setSearchWindowOpen, value }) => {
  const { handleMobileMenu } = useActions()
  const sneakersList = useSelector(sneakers)
  const { searchWindowOpen } = useSelector(mobileMenu)
  const sneakersFiltered = sneakersList.filter((sneaker) =>
    sneaker.title.toLowerCase().includes(value.toLowerCase().trim())
  )

  const mobileMenuClosing = () => {
    if (searchWindowOpen) {
      setSearchWindowOpen(false)
      return
    } else {
      handleMobileMenu()
    }
  }

  return (
    <div
      className={`${styles.result}`}
      bottomsearch={bottomsearch}
    >
      {sneakersFiltered.map((sneaker, i) => {
        if (value === '') {
          return null
        }
        return (
          <Link
            key={i}
            onClick={mobileMenuClosing}
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
