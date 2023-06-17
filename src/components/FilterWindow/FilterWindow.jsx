import React from 'react'

import { useSelector } from 'react-redux'

import FilterSelect from '../FilterSelect/FilterSelect'
import { VscClose } from 'react-icons/vsc'

import useActions from '../../hooks/useActions'
import { mobileMenu } from '../../redux/slices/mobileMenu/selectors'
import { categoryList } from '../../data'

import styles from './filterWindow.scss'

const FilterWindow = () => {
  const { filterWindowOpen } = useSelector(mobileMenu)
  const { setFilterWindowOpen } = useActions()

  return (
    filterWindowOpen && (
      <div className='filter__window'>
        <div className='filter__container'>
          <div className='filter__header'>
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
  )
}

export default FilterWindow
