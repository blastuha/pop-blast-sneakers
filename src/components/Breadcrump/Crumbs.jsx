import React from 'react'
import { useLocation } from 'react-router-dom'

import Crumb from './Crumb'
import useActions from '../../hooks/useActions'
import { pageNames } from '../../data'

const Crumbs = ({ sneakerData }) => {
  const location = useLocation()
  const { onChangeSex, onChangeShoesType, onChangeBrand } = useActions()

  return location.pathname
    .split('/')
    .filter((crumb) => crumb)
    .map((crumb, i) => {
      if (!sneakerData) {
        return (
          <Crumb
            key={i}
            pageName={pageNames[crumb]}
          />
        )
      } else {
        if (crumb === sneakerData.id) {
          return (
            <div
              style={{ display: 'inline-block' }}
              key={i}
            >
              <Crumb
                categoryChanger={onChangeSex}
                category={sneakerData.sex}
              />
              <Crumb
                categoryChanger={onChangeShoesType}
                category={sneakerData.category}
              />
              <Crumb
                categoryChanger={onChangeBrand}
                category={sneakerData.brand}
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
