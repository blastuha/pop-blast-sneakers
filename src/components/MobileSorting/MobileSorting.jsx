import React from 'react'
import { useSelector } from 'react-redux'
import Radio from '../UI/Radio/Radio'
import useActions from '../../hooks/useActions'
import { filterSort } from '../../redux/slices/filter&Sort/selectors'
import { sortOptions } from '../../data'
import classNames from 'classnames'
import styles from './mobileSorting.module.scss'

const MobileSorting = ({  mobileSortingOpen }) => {
  const { selectedOption } = useSelector(filterSort)
  const { setSortValue, setSelectedOption, onChangeMobileSorting } = useActions()

  const classes = classNames(styles.mobileSorting, {
    [styles.active]: mobileSortingOpen,
  })

  const onChange = (obj, i) => {
    setSortValue(obj.query)
    setSelectedOption(i)
    onChangeMobileSorting()
  }

  return (
    <div className={classes}>
      <div className={styles.mobileSorting__container}>
        {sortOptions.map((option, i) => {
          return (
            <Radio
              mobile={'true'}
              key={option.name}
              name={option.name}
              onChange={() => onChange(option, i)}
              value={selectedOption}
              checked={selectedOption === i}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MobileSorting
