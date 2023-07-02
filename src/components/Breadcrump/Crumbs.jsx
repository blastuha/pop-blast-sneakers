import React from 'react'
import { useLocation } from 'react-router-dom'

import Crumb from './Crumb'

import useActions from '../../hooks/useActions'
import { pageNames } from '../../data'

const Crumbs = ({ sneakerData }) => {
  const location = useLocation()
  const { setFiltredValue } = useActions()

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
                category={sneakerData.sex}
                setFiltredValue={setFiltredValue}
              />
              <Crumb
                category={sneakerData.category}
                setFiltredValue={setFiltredValue}
              />
              <Crumb
                category={sneakerData.brand}
                setFiltredValue={setFiltredValue}
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
