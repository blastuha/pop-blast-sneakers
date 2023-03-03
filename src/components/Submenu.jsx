import React from 'react'

function Submenu({ list, chosenCategory }) {
  return list.map((obj) => {
    if (obj.name === chosenCategory) {
      return (
        <div className='submenu'>
          <div className='submenu__content'>
            {obj.menu.map((item) => (
              <li className='submenu__content-item'>{item}</li>
            ))}
          </div>
        </div>
      )
    }
  })
}

export default Submenu
