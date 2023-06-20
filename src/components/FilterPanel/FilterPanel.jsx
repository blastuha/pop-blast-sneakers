import React from 'react'

import FilterButton from '../UI/FilterButton/FilterButton'
import SortButton from '../UI/SortButton/SortButton'

import useActions from '../../hooks/useActions'

import styles from './filterPanel.module.scss'

const FilterPanel = () => {
  const { setFilterWindowOpen } = useActions()

  return (
    <div className={styles.filters}>
      <FilterButton setFilterWindowOpen={setFilterWindowOpen} />
      <SortButton />
    </div>
  )
}

export default FilterPanel
