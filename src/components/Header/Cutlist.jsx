import React from 'react'
function Cutlist({ headerMenu }) {
  return (
    <div className='cutlist'>
      <div className='cutlist-content'>
        {headerMenu
          .filter((item, i) => i >= 2)
          .map((item, i) => {
            return (
              <div
                key={i}
                className='cutlist-item'
              >
                {item.name}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Cutlist
