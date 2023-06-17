import React from 'react'

import { LuSettings2 } from 'react-icons/lu'
import { IoFilterSharp } from 'react-icons/io5'

import useActions from '../../hooks/useActions'

import styles from './filterPanel.scss'

const FilterPanel = () => {
  const { setFilterWindowOpen } = useActions()

  return (
    <div className='filters'>
      <button onClick={() => setFilterWindowOpen(true)}>
        <LuSettings2 />
        <span>Фильтры</span>
      </button>

      <button>
        <IoFilterSharp />
        <span>Сортировка</span>
      </button>
    </div>
  )
}

export default FilterPanel
