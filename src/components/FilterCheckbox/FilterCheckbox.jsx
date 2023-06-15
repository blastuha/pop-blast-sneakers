import React, { useState } from 'react'

const FilterCheckbox = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheckboxChange() {
    setIsChecked(!isChecked)
  }

  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {item}
      </label>
    </div>
  )
}

export default FilterCheckbox
