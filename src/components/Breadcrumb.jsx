import React from 'react'

import { Link } from 'react-router-dom'

import Crumbs from './Crumbs'

function Breadcrumb({ sneakerDTO }) {
  return (
    <div className={`breadcrumb ${sneakerDTO && 'low-margin'}`}>
      <div className='breadcrumb__item'>
        <Link
          to='/'
          className='breadcrumb__item-link'
        >
          <span>Главная</span>
        </Link>
      </div>
      <Crumbs sneakerDTO={sneakerDTO} />
    </div>
  )
}

export default Breadcrumb
