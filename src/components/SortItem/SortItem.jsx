import React from 'react'
import { useSelector } from 'react-redux'
import { filterSort } from '../../redux/slices/filter&Sort/selectors'
import useActions from '../../hooks/useActions'
import classNames from 'classnames'
import styles from './SortItem.module.scss'

const SortItem = ({ option, i, onChangeOpen, handleClick }) => {
  const { selectedOption } = useSelector(filterSort)
  const { setSortValue } = useActions()

  const sortItemStyles = classNames(styles.sortModal__item, {
    [styles.active]: selectedOption === i,
  })

  return (
    <div className={sortItemStyles}>
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
