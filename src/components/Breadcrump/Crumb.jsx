import React from 'react'
import { Link } from 'react-router-dom'

const Crumb = ({ pageName, setFiltredValue, category }) => {
  return pageName ? (
    <div className='breadcrumb__item'>
      <div className='breadcrumb__item-link'>{pageName}</div>
    </div>
  ) : (
    <div className='breadcrumb__item'>
      <Link
        to='/'
        className='breadcrumb__item-link'
        onClick={() => setFiltredValue(category)}
      >
        {category ? category : 'Главная'}
      </Link>
    </div>
  )
}

export default Crumb
