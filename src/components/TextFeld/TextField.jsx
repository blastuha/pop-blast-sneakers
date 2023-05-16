import React, { useState } from 'react'
import styles from './textfield.module.scss'
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
    <div className={styles.textField}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        {...inputProps}
        onChange={onChange}
        onFocus={() => name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
        onBlur={blurHandler ? blurHandler : handleFocus}
      />
      <span className={styles.inputError}>{error}</span>
    </div>
  )
}

export default TextField
