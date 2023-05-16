import React, { useEffect } from 'react'

import { scrollToTop } from '../utils/scroll-to-top'
import Sneakers from '../components/Sneakers/Sneakers'
import SectionHeader from '../components/Header/SectionHeader'

function Main() {
  useEffect(() => scrollToTop(), [])

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
