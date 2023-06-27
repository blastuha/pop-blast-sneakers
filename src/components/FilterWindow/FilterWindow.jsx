import React from 'react'
import classNames from 'classnames'

import { useSelector } from 'react-redux'

import { VscClose } from 'react-icons/vsc'
import FilterSelect from '../FilterSelect/FilterSelect'

import useActions from '../../hooks/useActions'
import { filterSort } from '../../redux/slices/filter&Sort/selectors'
import { categoryList } from '../../data'

import styles from './filterWindow.module.scss'

const FilterWindow = () => {
  const { filterWindowOpen } = useSelector(filterSort)
  const { setFilterWindowOpen } = useActions()

  const windowClasses = classNames(styles.filter__window, {
    [styles.active]: filterWindowOpen,
  })

  return (
    <div className={windowClasses}>
      <div className={styles.filter__container}>
        <div className={styles.filter__header}>
          <h3>Фильтры</h3>
          <VscClose onClick={() => setFilterWindowOpen(false)} />
        </div>
        {categoryList.map((category, i) => {
          return (
            <FilterSelect
              name={category.name}
              menu={category.menu}
              key={i}
            />
          )
        })}
      </div>
    </div>
  )
}

export default FilterWindow
