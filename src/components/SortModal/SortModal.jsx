import React from 'react'
import SortItem from '../SortItem/SortItem'
import useActions from '../../hooks/useActions'
import { sortOptions } from '../../data'
import styles from './sortModal.module.scss'

const SortModal = ({ sortModalOpen, onChangeOpen }) => {
  const { setSelectedOption } = useActions()

  const handleClick = (index) => {
    setSelectedOption(index)
  }

  return (
    sortModalOpen && (
      <div className={styles.sortModal}>
        {sortOptions.map((option, i) => {
          return (
            <SortItem
              key={i}
              option={option}
              i={i}
              onChangeOpen={onChangeOpen}
              handleClick={handleClick}
            />
          )
        })}
      </div>
    )
  )
}

export default SortModal
