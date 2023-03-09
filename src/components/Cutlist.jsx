import React from 'react'

function Cutlist({ headerMenu }) {
  return (
    <div className='cutlist'>
      <div className='cutlist-content'>
        {headerMenu.map((item, i) => {
          if (i >= 2) {
            return <div className='cutlist-item'>{item.name}</div>
          }
        })}
      </div>
    </div>
  )
}

export default Cutlist
