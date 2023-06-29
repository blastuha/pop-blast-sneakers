import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { sneakers } from '../redux/slices/sneakers/selectors'

// import Sneakers from '../components/Sneakers/Sneakers'
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

//* распределить
import useAlerts from '../hooks/useAlerts'
import useActions from '../hooks/useActions'
import { alertObj } from '../data'
import { favouritesData } from '../redux/slices/favourites/selectors'
import { sneakerMap } from '../utils/sneakerMap'
import { isSneakerInFavourite } from '../utils/isSneakerInFavourite'
import { getFiltredSneakers } from '../utils/filtredSneakers'
import { SneakerList } from '../components/SneakerList'

function Main() {
  const { mobileSortingOpen } = useSelector(filterSort)
  const { sneakersList, fetchStatus } = useSelector(sneakers)
  const favourites = useSelector(favouritesData)

  console.log(favourites)

  const { addToFavourites, deleteFromFavourites, addAlert } = useActions()
  const { globalInputValue } = useInputValue()
  const alertsList = useAlerts()

  useEffect(() => scrollToTop(), [])

  const filtredSneakers = getFiltredSneakers(sneakersList, globalInputValue)
  const alert = alertObj(alertsList, '✓ Товар добавлен в избранное')

  // const sneakersProps = {
  //   isFavouristes: 'false',
  //   isSneakerInFavourite: isSneakerInFavourite,
  //   addToFavourites: (favourites, id) => addToFavourites(favourites, id),
  //   deleteFromFavourites: deleteFromFavourites,
  //   addAlert: addAlert,
  //   alert: alert,
  //   favourites: favourites,
  // }

  return (
    <div className='main'>
      <div className='main__container'>
        <AlertsModal />
        <FilterWindow />
        <CategoryBlock />
        <FilterPanel />
        {/* {sneakersFiltered.length === 0 && <NothingFound />} */}
        <div className='main__grid'>
          <SneakerList
            sneakers={filtredSneakers}
            isFavourites={'false'}
            isSneakerInFavourite={isSneakerInFavourite}
            addToFavourites={addToFavourites}
            deleteFromFavourites={deleteFromFavourites}
            addAlert={addAlert}
            alert={alert}
            favourites={favourites}
          />
          {/* {sneakerMap(sneakersList, globalInputValue, sneakersProps)} */}
        </div>
      </div>
      <MobileSorting mobileSortingOpen={mobileSortingOpen} />
      {mobileSortingOpen && <Overlay />}
    </div>
  )
}

export default Main
