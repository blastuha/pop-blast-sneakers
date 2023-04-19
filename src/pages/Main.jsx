import React from 'react'
import Sneakers from '../components/Sneakers'
import SectionHeader from '../components/Header/SectionHeader'

function Main() {
  return (
    <div className='main'>
      <div className='main__container'>
        <SectionHeader />
        <div className='main__sneakers'>
          <Sneakers />
        </div>
      </div>
    </div>
  )
}

export default Main
