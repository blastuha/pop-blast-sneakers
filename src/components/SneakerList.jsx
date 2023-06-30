import React from 'react'
import { useSelector } from 'react-redux'
import { sneakers } from '../redux/slices/sneakers/selectors'

import SneakerCard from '../components/SneakerCard/SneakerCard'
import Skeleton from './Skeleton.jsx'

import { isSneakerInFavourite } from '../utils/isSneakerInFavourite'

const SneakerList = ({
  sneakersList,
  isFavourites,
  addToFavourites,
  deleteFromFavourites,
  addAlert,
  alert,
  favouriteList,
}) => {
  const { fetchStatus } = useSelector(sneakers)
  const isItFavouritesPage =
    isFavourites === 'false' ? sneakersList : favouriteList
  const isContentLoaded =
    fetchStatus !== 'success' ? Array(10).fill(0) : isItFavouritesPage

  return isContentLoaded.map((sneaker, i) => {
    const isInFavourite = isSneakerInFavourite(favouriteList, sneaker.id)

    if (fetchStatus !== 'success') {
      return <Skeleton key={i} />
    }

    return (
      <SneakerCard
        sneaker={sneaker}
        key={sneaker.id}
        addToFavourites={addToFavourites}
        deleteFromFavourites={deleteFromFavourites}
        addAlert={addAlert}
        alert={alert}
        isInFavourite={isInFavourite}
        isFavourites={isFavourites}
      />
    )
  })
}

export default SneakerList
