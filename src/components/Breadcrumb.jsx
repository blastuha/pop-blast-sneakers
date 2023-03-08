import React from 'react'

function Breadcrumb() {
  return (
    <div className='breadcrumb'>
      <div className='breadcrumb__container'>
        <div className='breadcrumb__item'>
          <a
            href='/'
            title='Главная'
            className='breadcrumb__link'
          >
            Главная
          </a>
        </div>
        <div className='breadcrumb__item'>
          <span>Доставка и оплата</span>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
