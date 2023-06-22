import React from 'react'
import Radio from '../UI/Radio/Radio'
import useActions from '../../hooks/useActions'
import { sortOptions } from '../../data'
import styles from './mobileSorting.module.scss'

const MobileSorting = () => {
  const { setSortValue, setSelectedOption } = useActions()

  const onChange = (obj, i) => {
    setSortValue(obj.query)
    setSelectedOption(i)
  }

  return (
    <div className={styles.mobileSorting}>
      <div className={styles.mobileSorting__container}>
        {sortOptions.map((option, i) => {
          return (
            <Radio
              mobile={'true'}
              key={i}
              name={option.name}
              onChange={() => onChange(option, i)}
              defaultChecked={i === 0}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MobileSorting
