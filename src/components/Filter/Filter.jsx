import React from 'react'

import { LuSettings2 } from 'react-icons/lu'
import { IoFilterSharp } from 'react-icons/io5'

import styles from './Filter.scss'

const Filter = ({ setFilterWindowOpen }) => {
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

export default Filter
