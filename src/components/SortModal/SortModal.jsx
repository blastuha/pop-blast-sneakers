import React, { useState } from 'react'

import SortItem from '../SortItem/SortItem'

import { sortOptions } from '../../data'

import classNames from 'classnames'
import styles from './sortModal.module.scss'

const SortModal = ({ sortModalOpen, onChangeOpen }) => {
  const [active, setActive] = useState(0)

  const handleClick = (index) => {
    setActive(index)
  }

  return (
    sortModalOpen && (
      <div className={styles.sortModal}>
        {sortOptions.map((option, i) => {
          //* перенести в SortItem
          const sortItemStyles = classNames(styles.sortModal__item, {
            [styles.active]: active === i,
          })

          return (
            <SortItem
              option={option}
              i={i}
              sortItemStyles={sortItemStyles}
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
