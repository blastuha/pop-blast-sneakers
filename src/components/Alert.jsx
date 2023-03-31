import React, { useEffect, useState } from 'react'

function Alert({ alert }) {
  return (
    !alert.wasShown && (
      <div className={`alert ${!alert.wasShown ? 'active' : ''}`}>
        <span>{alert.text}</span>
      </div>
    )
  )
}

export default Alert
