import React, { useState } from 'react'

const FilterCheckbox = ({ item, name }) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div>
      <label>
        <input
          type='radio'
          name={name}
        />
        {item}
      </label>
    </div>
  )
}

export default FilterCheckbox
