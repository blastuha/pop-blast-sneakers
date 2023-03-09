import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb() {
  return (
    <div className='breadcrumb'>
      <div className='breadcrumb__container'>
        <div className='breadcrumb__item'>
          <Link
            to='/'
            title='Главная'
            className='breadcrumb__item-link'
          >
            Главная
          </Link>
        </div>
        <div className='breadcrumb__item'>
          <span>Доставка и оплата</span>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
