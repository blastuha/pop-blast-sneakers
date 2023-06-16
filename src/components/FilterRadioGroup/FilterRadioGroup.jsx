import React, { useState } from 'react'
import styles from './FilterRadioGroup.scss'

const FilterRadioGroup = ({ menu }) => {
  const [selectedValue, setSelectedValue] = useState('')

  console.log('selectedValue', selectedValue)

  const onChange = (e) => {
    const value = e.target.value
    setSelectedValue(value)
  }

  return (
    <div className='filter__checkboxes'>
      {menu.map((item, i) => {
        return (
          <div key={i}>
            <label>
              <input
                type='radio'
                name='radio-group'
                value={item}
                onChange={onChange}
              />
              {item}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default FilterRadioGroup
