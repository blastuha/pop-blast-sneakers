/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

function Cutlist({ headerMenu }) {
  return (
    <div className='cutlist'>
      <div className='cutlist-content'>
        {headerMenu
          .filter((_, i) => i >= 2)
          .map((item, i) => {
            return (
              <div
                key={i}
                className='cutlist-item'
              >
                <Link to={item.link}>{item.name}</Link>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Cutlist
