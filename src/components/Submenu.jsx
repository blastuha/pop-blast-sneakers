import React from 'react'

function Submenu({ list, chosenCategory }) {
  return list.map((obj) => {
    if (obj.name === chosenCategory && chosenCategory === 'Бренды') {
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
    if (obj.name === chosenCategory && chosenCategory === 'Тип обуви') {
      return (
        <div className='submenu type'>
          <div className='submenu__content'>
            {obj.menu.map((item) => (
              <li className='submenu__content-item'>{item}</li>
            ))}
          </div>
        </div>
      )
    }
    if (obj.name === chosenCategory && chosenCategory === 'Пол') {
      return (
        <div className='submenu sex'>
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
