import React, { useState } from 'react'

const TextField = ({ label, name, error, onChange, id, ...inputProps }) => {
  const [focused, setFocused] = useState(false)

  console.log(error)

  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <div className='text-field'>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        {...inputProps}
        onChange={onChange}
        onFocus={() => name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
        onBlur={handleFocus}
      />
      <span className='input-error'>{error}</span>
    </div>
  )
}

export default TextField
