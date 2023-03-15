import React, { useState, useEffect } from 'react'
import Sneakers from './Sneakers'

function Main() {
  return (
    <div className='main'>
      <div className='main__container'>
        <div className='main__sneakers'>
          <Sneakers />
        </div>
      </div>
    </div>
  )
}

export default Main
