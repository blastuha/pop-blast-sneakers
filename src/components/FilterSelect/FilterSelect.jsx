import React, { useState } from 'react'

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

import { BiDownArrow } from 'react-icons/bi'
import { BiUpArrow } from 'react-icons/bi'

import styles from './filterSelect.scss'

const FilterSelect = ({ name, menu, i }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        key={i}
        className='filter__item'
        attr={`${open}`}
      >
        {name}
        {open ? (
          <BiUpArrow onClick={() => setOpen(false)} />
        ) : (
          <BiDownArrow onClick={() => setOpen(true)} />
        )}
      </div>
      <div className='filter__checkboxes'>
        {open &&
          menu.map((item, i) => {
            return (
              <FilterCheckbox
                item={item}
                key={i}
              />
            )
          })}
      </div>
    </>
  )
}

export default FilterSelect
