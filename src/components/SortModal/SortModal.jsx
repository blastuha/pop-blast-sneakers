import React, { useState } from 'react'
import useActions from '../../hooks/useActions'
import { sortOptions } from '../../data'
import styles from './sortModal.module.scss'

const SortModal = ({ sortModalOpen, onChangeOpen }) => {
  const [active, setActive] = useState(0)
  const { setSortValue } = useActions()

  const handleClick = (index) => {
    setActive(index)
  }

  return (
    sortModalOpen && (
      <div className={styles.sortModal}>
        {sortOptions.map((option, i) => {
          return (
            <div
              key={i}
              className={`${styles.sortModal__item} ${
                active === i ? `${styles.active}` : ''
              }`}
            >
              <button
                className={styles.sortModal__btn}
                onClick={() => {
                  onChangeOpen()
                  setSortValue(option.query)
                  handleClick(i)
                }}
              >
                {option.name}
              </button>
            </div>
          )
        })}
      </div>
    )
  )
}

export default SortModal
