import React from 'react'
import { LuSettings2 } from 'react-icons/lu'
import styles from './filterButton.module.scss'

const FilterButton = ({ setFilterWindowOpen }) => {
  return (
    <button
      className={styles.filterBtn}
      onClick={() => setFilterWindowOpen(true)}
    >
      <LuSettings2 />
      <span>Фильтры</span>
    </button>
  )
}

export default FilterButton
