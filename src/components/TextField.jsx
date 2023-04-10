import React, { useState } from 'react'

const TextField = ({
  label,
  name,
  error,
  onChange,
  id,
  blurHandler,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false)

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
        onBlur={blurHandler ? blurHandler : handleFocus}
      />
      <span className='input-error'>{error}</span>
    </div>
  )
}

export default TextField
