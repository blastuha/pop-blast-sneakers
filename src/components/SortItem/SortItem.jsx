import React from 'react'
import useActions from '../../hooks/useActions'
import classNames from 'classnames'
import styles from './SortItem.module.scss'

const SortItem = ({ option, i, sortItemStyles, onChangeOpen, handleClick }) => {
  const { setSortValue } = useActions()
  console.log(sortItemStyles)

  return (
    <div
      key={i}
      className={sortItemStyles}
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
}

export default SortItem
