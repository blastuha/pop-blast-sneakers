import React from 'react'

import FilterButton from '../UI/FilterButton/FilterButton'
import SortButton from '../UI/SortButton/SortButton'

import useActions from '../../hooks/useActions'
import useWidth from '../../hooks/useWidth'

import styles from './filterPanel.module.scss'

const FilterPanel = ({ onChangeOpen, onChangeMobileSorting }) => {
  const { setFilterWindowOpen } = useActions()
  const width = useWidth()

  return (
    width <= 767 && (
      <div className={styles.filters}>
        <FilterButton setFilterWindowOpen={setFilterWindowOpen} />
        <SortButton
          onChangeOpen={onChangeOpen}
          onChangeMobileSorting={onChangeMobileSorting}
        />
      </div>
    )
  )
}

export default FilterPanel
