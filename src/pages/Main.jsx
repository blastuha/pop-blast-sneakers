import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { sneakers } from '../redux/slices/sneakers/selectors'

import { scrollToTop } from '../utils/scroll-to-top'
import Sneakers from '../components/Sneakers/Sneakers'
import SectionHeader from '../components/Header/SectionHeader'
import NothingFound from '../components/NothingFound/NothingFound'
import useInputValue from '../hooks/useInputValue'

function Main() {
  useEffect(() => scrollToTop(), [])
  const sneakersList = useSelector(sneakers)
  const { value } = useInputValue()
  const sneakersFiltered = sneakersList.filter((sneaker) =>
    sneaker.title.toLowerCase().includes(value.toLowerCase().trim())
  )

  return (
    <div className='main'>
      <div className='main__container'>
        <SectionHeader />
        {sneakersFiltered.length === 0 && <NothingFound />}
        <div className='main__sneakers'>
          <Sneakers
            sneakersList={sneakersList}
            value={value}
          />
        </div>
      </div>
    </div>
  )
}

export default Main
