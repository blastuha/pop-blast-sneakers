import React from 'react'

import { useSelector } from 'react-redux'
import { filterSort } from '../../redux/slices/filter&Sort/selectors'

import { TfiClose } from 'react-icons/tfi'
import useActions from '../../hooks/useActions'

import styles from './categoryBlock.module.scss'

function CategoryBlock() {
  const { filtredValue } = useSelector(filterSort)
  const { clearAllFilters } = useActions()

  return filtredValue ? (
    <div className={styles.categoryBlock}>
      <span className={styles.title}>{filtredValue}</span>
      <TfiClose
        className={styles.delete}
        onClick={clearAllFilters}
      />
    </div>
  ) : (
    ''
  )
}

export default CategoryBlock
