import React from 'react'

function Dropdown({
  menu,
  open,
  onChangeBrand,
  onChangeOpen,
  onChangeShoesType,
  onChangeSex,
}) {
  return (
    <div
      className='dropdown'
      style={{ display: open ? 'block' : 'none' }}
    >
      {menu.map((item, i) => {
        return (
          <div
            key={i}
            className='dropdown__content'
          >
            <div
              className='dropdown__content-item'
              onClick={() => {
                onChangeBrand(item)
                onChangeOpen()
                onChangeShoesType(item)
                onChangeSex(item)
              }}
            >
              {item}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Dropdown
