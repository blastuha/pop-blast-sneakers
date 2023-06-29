import React from 'react'
import { LuSettings2 } from 'react-icons/lu'
import styles from './filterButton.module.scss'

const FilterButton = ({ onChange }) => {
  return (
    <button
      className={styles.filterBtn}
      onClick={() => onChange(true)}
    >
      <LuSettings2 />
      <span>Фильтры</span>
    </button>
  )
}

export default FilterButton
