import React from 'react'
import { IoFilterSharp } from 'react-icons/io5'
import styles from './sortButton.module.scss'

const SortButton = ({ categories, onChangeOpen }) => {
  return (
    <>
      <button
        onClick={onChangeOpen}
        categories={categories}
      >
        <IoFilterSharp />
        <span>Сортировка</span>
      </button>
    </>
  )
}

export default SortButton
