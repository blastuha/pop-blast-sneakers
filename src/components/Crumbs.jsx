import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { appContext } from '../App'
import Crumb from './Crumb'

const pageNames = { contacts: 'Контакты', cart: 'Корзина' }

const Crumbs = ({ sneakerDTO }) => {
  const onChangeShoesType = useContext(appContext).onChangeShoesType
  const onChangeBrand = useContext(appContext).onChangeBrand
  const onChangeSex = useContext(appContext).onChangeSex

  const location = useLocation()

  return location.pathname
    .split('/')
    .filter((crumb) => crumb)
    .map((crumb, i) => {
      if (!sneakerDTO) {
        return (
          <Crumb
            key={i}
            pageName={pageNames[crumb]}
          />
        )
      } else {
        if (crumb === sneakerDTO.data.id) {
          return (
            <div
              style={{ display: 'inline-block' }}
              key={i}
            >
              <Crumb
                categoryChanger={onChangeSex}
                category={sneakerDTO.data.sex}
              />
              <Crumb
                categoryChanger={onChangeShoesType}
                category={sneakerDTO.data.category}
              />
              <Crumb
                categoryChanger={onChangeBrand}
                category={sneakerDTO.data.brand}
              />
            </div>
          )
        } else {
          return ''
        }
      }
    })
}

export default Crumbs
