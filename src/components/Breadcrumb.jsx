import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Breadcrumb() {
  const location = useLocation()
  console.log(location)

  let currentLink = ''
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink = +`/${crumb}`

      return (
        <div
          className='breadcrumb__item'
          key={crumb}
        >
          <Link
            to={currentLink}
            className='breadcrumb__item-link'
          >
            {crumb}
          </Link>
        </div>
      )
    })

  return (
    <div className='breadcrumb'>
      <div className='breadcrumb__item'>
        <Link
          to='/'
          className='breadcrumb__item-link'
        >
          <span>Главная</span>
        </Link>
      </div>
      {crumbs}
    </div>
  )
}

export default Breadcrumb
