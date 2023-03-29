import React, { useRef } from 'react'

function AddItemAlert({ alertOpen, children }) {
  ;<div className={`alert ${alertOpen ? 'active' : ''}`}>
    <span>✓ Товар добавлен в корзину</span>
  </div>
  return <div className='alerts-modal'>{children}</div>
}

export default AddItemAlert
