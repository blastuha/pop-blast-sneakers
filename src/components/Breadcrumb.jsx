import React, { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { appContext } from '../App'

const pageNames = { contacts: 'Контакты', cart: 'Корзина' }

function Breadcrumb({ sneakerDTO }) {
  const onChangeShoesType = useContext(appContext).onChangeShoesType
  const onChangeBrand = useContext(appContext).onChangeBrand
  const onChangeSex = useContext(appContext).onChangeSex

  const location = useLocation()

  let currentLink = ''
  const crumbs = location.pathname
    //! crumbs - это походу отдельный компонент!!!
    .split('/')
    .filter((crumb) => crumb)
    .map((crumb, i) => {
      currentLink = +`/${crumb}`
      if (!sneakerDTO) {
        return (
          <div
            className='breadcrumb__item'
            key={i}
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
          //! items можно промапить через массив, подумать как это сделать
          return (
            <div
              style={{ display: 'inline-block' }}
              key={i}
            >
              <div className='breadcrumb__item'>
                <Link
                  to='/'
                  className='breadcrumb__item-link'
                  onClick={() => onChangeSex(sneakerDTO.data.sex)}
                >
                  {sneakerDTO.data.sex}
                </Link>
              </div>
              <div className='breadcrumb__item'>
                <Link
                  to='/'
                  className='breadcrumb__item-link'
                  onClick={() => onChangeShoesType(sneakerDTO.data.category)}
                >
                  {sneakerDTO.data.category}
                </Link>
              </div>
              <div className='breadcrumb__item'>
                <Link
                  to='/'
                  className='breadcrumb__item-link'
                  onClick={() => onChangeBrand(sneakerDTO.data.brand)}
                >
                  {sneakerDTO.data.brand}
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
