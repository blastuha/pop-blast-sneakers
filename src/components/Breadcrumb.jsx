import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Breadcrumb({ sneakerDTO }) {
  const location = useLocation()
  // console.log(sneakerDTO)

  let currentLink = ''
  const crumbs = location.pathname
    .split('/')
    // .filter((crumb) => crumb === sneakerDTO.data.id)
    .filter((crumb) => crumb)
    .map((crumb) => {
      currentLink = +`/${crumb}`
      if (!sneakerDTO) {
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
      } else {
        return (
          <div
            className='breadcrumb__item'
            key={crumb}
          >
            <Link
              to={currentLink}
              className='breadcrumb__item-link'
            >
              {sneakerDTO.data.title}
            </Link>
          </div>
        )
      }
    })
  console.log(crumbs)

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
