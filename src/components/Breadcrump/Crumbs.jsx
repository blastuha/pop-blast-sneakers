import React from 'react'
import { useLocation } from 'react-router-dom'

import Crumb from './Crumb'
import {
  onChangeBrand,
  onChangeShoesType,
  onChangeSex,
} from '../../redux/slices/categoriesSlice'
import { useDispatch } from 'react-redux'

const pageNames = { contacts: 'Контакты', cart: 'Корзина' }

const Crumbs = ({ sneakerDTO }) => {
  const dispatch = useDispatch()
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
                categoryChanger={dispatch(onChangeSex)}
                category={sneakerDTO.data.sex}
              />
              <Crumb
                categoryChanger={dispatch(onChangeShoesType)}
                category={sneakerDTO.data.category}
              />
              <Crumb
                categoryChanger={dispatch(onChangeBrand)}
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
