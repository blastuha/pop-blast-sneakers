import React from 'react'

import FilterButton from '../UI/FilterButton/FilterButton'
import SortButton from '../UI/SortButton/SortButton'

import useActions from '../../hooks/useActions'
import useWidth from '../../hooks/useWidth'

import styles from './filterPanel.module.scss'

const FilterPanel = () => {
  const { setFilterWindowOpen, onChangeMobileSorting } = useActions()
  const width = useWidth()

  return (
    width <= 767 && (
      <div className={styles.filters}>
        <FilterButton onChange={setFilterWindowOpen} />
        <SortButton onChange={onChangeMobileSorting} />
      </div>
    )
  )
}

export default FilterPanel
