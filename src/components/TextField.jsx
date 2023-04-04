import React from 'react'

const TextField = ({ label, type = 'text', name, value, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default TextField
