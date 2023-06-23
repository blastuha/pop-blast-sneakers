import React from 'react'
import { IoFilterSharp } from 'react-icons/io5'
import styles from './sortButton.module.scss'

const SortButton = ({ categories, onChangeOpen, onChangeMobileSorting }) => {
  return (
    <>
      <button
        className={styles.sortBtn}
        onClick={() => {
          onChangeOpen()
          !categories && onChangeMobileSorting()
        }}
        categories={categories}
      >
        <IoFilterSharp />
        <span>Сортировка</span>
      </button>
    </>
  )
}

export default SortButton
