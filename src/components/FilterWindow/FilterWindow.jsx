import React from 'react'
import { categoryList } from '../../data'

import { BiDownArrow } from 'react-icons/bi'
import { BiUpArrow } from 'react-icons/bi'
import { VscClose } from 'react-icons/vsc'

import styles from './filterWindow.scss'

const FilterWindow = () => {
  return (
    <div className='filter__window'>
      <div className='filter__container'>
        <div className='filter__header'>
          <h3>Фильтры</h3>
          <VscClose />
        </div>
        {categoryList.map((category) => {
          return (
            <div className='filter__item'>
              {category.name}
              <BiDownArrow />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilterWindow
