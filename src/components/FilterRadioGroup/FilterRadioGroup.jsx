import React, { useState } from 'react'
import useActions from '../../hooks/useActions'
import styles from './FilterRadioGroup.scss'

const FilterRadioGroup = ({ menu, open }) => {
  const { setFiltredValue } = useActions()

  const onChange = (e) => {
    const value = e.target.value
    setFiltredValue(value)
  }

  return (
    <div className={`filter__radiogroup ${open ? 'expand' : 'collapse'}`}>
      {menu.map((item, i) => {
        return (
          <div
            className='radioBtn'
            key={i}
          >
            <label>
              <input
                type='radio'
                name='radio-group'
                value={item}
                onChange={onChange}
                className='realRadio'
              />
              <span className='customRadio'></span>
              {item}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default FilterRadioGroup
