import React from 'react'

function Alert({ alertOpen }) {
  return (
    <div className={`alert ${alertOpen ? 'active' : ''}`}>
      <span>✓ Товар добавлен в корзину</span>
    </div>
  )
}

export default Alert
