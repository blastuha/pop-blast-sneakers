import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { sneakers } from '../redux/slices/sneakers/selectors'

import { scrollToTop } from '../utils/scroll-to-top'
import Sneakers from '../components/Sneakers/Sneakers'
import SectionHeader from '../components/Header/SectionHeader'
import NothingFound from '../components/NothingFound/NothingFound'
import AlertsModal from '../components/Alerts/AlertsModal/AlertsModal'
import useInputValue from '../hooks/useInputValue'
import MobileFilter from '../components/MobileFilter/MobileFilter'
import FilterWindow from '../components/FilterWindow/FilterWindow'

function Main() {
  useEffect(() => scrollToTop(), [])
  const sneakersList = useSelector(sneakers)
  const { globalInputValue } = useInputValue()

  const sneakersFiltered = sneakersList.filter((sneaker) =>
    sneaker.title.toLowerCase().includes(globalInputValue.toLowerCase().trim())
  )

  return (
    <div className='main'>
      <div className='main__container'>
        <FilterWindow />
        <SectionHeader />
        <MobileFilter />
        {sneakersFiltered.length === 0 && <NothingFound />}
        <div className='main__sneakers'>
          <AlertsModal />
          <Sneakers
            sneakersList={sneakersList}
            value={globalInputValue}
            isfavouristes='false'
          />
        </div>
      </div>
    </div>
  )
}

export default Main
