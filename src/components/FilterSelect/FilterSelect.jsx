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
    <>
      <div
        key={i}
        className='filter__item'
        attr={`${open}`}
      >
        {name}
        {open ? (
          <BiUpArrow onClick={handleOpen} />
        ) : (
          <BiDownArrow onClick={handleOpen} />
        )}
      </div>
      {open && <FilterRadioGroup menu={menu} />}
    </>
  )
}

export default FilterSelect
