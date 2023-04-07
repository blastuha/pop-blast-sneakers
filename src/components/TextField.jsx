import React from 'react'

const TextField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  handleBlur,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
      />
    </>
  )
}

export default TextField
