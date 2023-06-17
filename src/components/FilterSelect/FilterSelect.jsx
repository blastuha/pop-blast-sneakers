import React, { useState } from 'react'

import FilterRadioGroup from '../FilterRadioGroup/FilterRadioGroup'

import { BiDownArrow } from 'react-icons/bi'
import { BiUpArrow } from 'react-icons/bi'

import styles from './filterSelect.scss'

const FilterSelect = ({ name, menu, i }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className='filter__item'>
      <div
        key={i}
        className='filter__name'
      >
        {name}
        {open ? (
          <BiUpArrow onClick={handleOpen} />
        ) : (
          <BiDownArrow onClick={handleOpen} />
        )}
      </div>
      {open && (
        <FilterRadioGroup
          menu={menu}
          open={open}
        />
      )}
    </div>
  )
}

export default FilterSelect
