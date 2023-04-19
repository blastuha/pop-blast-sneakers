import React from 'react'

function Alert({ alert }) {
  return (
    <div className='alert active'>
      <span>{alert.text}</span>
    </div>
  )
}

export default Alert
