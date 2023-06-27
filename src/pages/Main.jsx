import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { sneakers } from '../redux/slices/sneakers/selectors'

import Sneakers from '../components/Sneakers/Sneakers'
import CategoryBlock from '../components/CategoryBlock/CategoryBlock'
import NothingFound from '../components/NothingFound/NothingFound'
import AlertsModal from '../components/Alerts/AlertsModal/AlertsModal'
import FilterPanel from '../components/FilterPanel/FilterPanel'
import FilterWindow from '../components/FilterWindow/FilterWindow'
import MobileSorting from '../components/MobileSorting/MobileSorting'
import Overlay from '../components/Overlay/Overlay'

import { filterSort } from '../redux/slices/filter&Sort/selectors'
import useInputValue from '../hooks/useInputValue'
import { scrollToTop } from '../utils/scroll-to-top'



function Main() {
  const {mobileSortingOpen} = useSelector(filterSort)
  const sneakersList = useSelector(sneakers)

  const { globalInputValue } = useInputValue()

  const sneakersFiltered = sneakersList.filter((sneaker) =>
    sneaker.title.toLowerCase().includes(globalInputValue.toLowerCase().trim())
  )

  useEffect(() => scrollToTop(), [])

  return (
    <div className='main'>
      <div className='main__container'>
        <FilterWindow />
        <CategoryBlock />
        <FilterPanel
        />
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
      <MobileSorting
        mobileSortingOpen={mobileSortingOpen}
      />
      {mobileSortingOpen && (
        <Overlay />
      )}
    </div>
  )
}

export default Main
