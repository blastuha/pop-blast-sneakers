import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

// import Sneakers from '../components/Sneakers/Sneakers'
import CategoryBlock from '../components/CategoryBlock/CategoryBlock'
import NothingFound from '../components/NothingFound/NothingFound'
import AlertsModal from '../components/Alerts/AlertsModal/AlertsModal'
import FilterPanel from '../components/FilterPanel/FilterPanel'
import FilterWindow from '../components/FilterWindow/FilterWindow'
import MobileSorting from '../components/MobileSorting/MobileSorting'
import Overlay from '../components/Overlay/Overlay'
import SneakerList from '../components/SneakerList'

import { filterSort } from '../redux/slices/filter&Sort/selectors'
import { sneakers } from '../redux/slices/sneakers/selectors'
import { favouritesData } from '../redux/slices/favourites/selectors'

import useInputValue from '../hooks/useInputValue'
import useAlerts from '../hooks/useAlerts'
import useActions from '../hooks/useActions'

import { scrollToTop } from '../utils/scroll-to-top'
import { getFiltredSneakers } from '../utils/filtredSneakers'
import { alertObj } from '../data'

//* распределить
import Skeleton from '../components/Skeleton/Skeleton'

function Main() {
  const { mobileSortingOpen } = useSelector(filterSort)
  const { sneakersList, fetchStatus } = useSelector(sneakers)
  const favouriteList = useSelector(favouritesData)

  const { addToFavourites, deleteFromFavourites, addAlert } = useActions()
  const { globalInputValue } = useInputValue()
  const alertsList = useAlerts()

  useEffect(() => scrollToTop(), [])

  const filtredSneakers = getFiltredSneakers(sneakersList, globalInputValue)
  const alert = alertObj(alertsList, '✓ Товар добавлен в избранное')

  return (
    <div className='main'>
      <div className='main__container'>
        <AlertsModal />
        <FilterWindow />
        <CategoryBlock />
        <FilterPanel />
        {filtredSneakers.length === 0 && fetchStatus === 'success' && (
          <NothingFound />
        )}
        <div className='main__grid'>
          <SneakerList
            sneakers={filtredSneakers}
            isFavourites={'false'}
            addToFavourites={addToFavourites}
            deleteFromFavourites={deleteFromFavourites}
            addAlert={addAlert}
            alert={alert}
            favouriteList={favouriteList}
            fetchStatus={fetchStatus}
          />
        </div>
      </div>
      <MobileSorting mobileSortingOpen={mobileSortingOpen} />
      {mobileSortingOpen && <Overlay />}
    </div>
  )
}

export default Main
