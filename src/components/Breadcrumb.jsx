import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const pageNames = { contacts: 'Контакты', cart: 'Корзина' }

function Breadcrumb({ sneakerDTO }) {
  const location = useLocation()

  let currentLink = ''
  const crumbs = location.pathname
    .split('/')
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
              {pageNames[crumb]}
            </Link>
          </div>
        )
      } else {
        if (crumb === sneakerDTO.data.id) {
          return (
            <div style={{ display: 'inline-block' }}>
              <div
                className='breadcrumb__item'
                key={Date.now()}
              >
                <Link
                  to={currentLink}
                  className='breadcrumb__item-link'
                >
                  {sneakerDTO.data.sex}
                </Link>
              </div>
              <div
                className='breadcrumb__item'
                key={Date.now()}
              >
                <Link
                  to={currentLink}
                  className='breadcrumb__item-link'
                >
                  {sneakerDTO.data.category}
                </Link>
              </div>
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
            </div>
          )
        }
        return null
      }
    })

  return (
    <div className={`breadcrumb ${sneakerDTO ? 'low-margin' : ''}`}>
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
