import React, { useState, useEffect } from 'react'
import Sneaker from './Sneaker'

function Main() {
  return (
    <div className='main'>
      <div className='main__container'>
        <div className='main__sneakers'>
          <Sneaker />
        </div>
      </div>
    </div>
  )
}

export default Main
