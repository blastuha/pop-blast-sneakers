import React from 'react'
import { IoFilterSharp } from 'react-icons/io5'
import useActions from '../../../hooks/useActions'
import styles from './sortButton.module.scss'

const SortButton = ({ categories }) => {
  const {onChangeMobileSorting} = useActions()

  return (
    <>
      <button
        className={styles.sortBtn}
        onClick={() => {
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
