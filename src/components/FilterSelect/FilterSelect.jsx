import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import FilterRadioGroup from '../FilterRadioGroup/FilterRadioGroup'

import { BiDownArrow } from 'react-icons/bi'
import { BiUpArrow } from 'react-icons/bi'

import styles from './filterSelect.module.scss'

const FilterSelect = ({ name, menu, i }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={styles.filter__item}>
      <div
        key={i}
        className={styles.filter__name}
      >
        {name}
        {open ? (
          <BiUpArrow onClick={handleOpen} />
        ) : (
          <BiDownArrow onClick={handleOpen} />
        )}
      </div>
      <CSSTransition
        in={open}
        timeout={300}
        classNames='radios'
        unmountOnExit
      >
        <FilterRadioGroup menu={menu} />
      </CSSTransition>
    </div>
  )
}

export default FilterSelect
