import React from 'react'

import { LuSettings2 } from 'react-icons/lu'
import { IoFilterSharp } from 'react-icons/io5'

import styles from './mobileFilter.scss'

const MobileFilter = () => {
  return (
    <div className='filters'>
      <button>
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

export default MobileFilter
