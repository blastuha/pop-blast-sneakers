import { v4 as uuidv4 } from 'uuid'
import SneakerCard from '../components/SneakerCard/SneakerCard'
import Skeleton from '../components/Skeleton/Skeleton'
import { isSneakerInFavourite } from '../utils/isSneakerInFavourite'

const SneakerList = ({
  sneakers,
  isFavourites,
  addToFavourites,
  deleteFromFavourites,
  addAlert,
  alert,
  favouriteList,
  fetchStatus,
}) => {
  const isItFavouritesPage = isFavourites === 'false' ? sneakers : favouriteList
  const isContentLoaded =
    fetchStatus !== 'success' ? Array(10).fill(0) : isItFavouritesPage

  return isContentLoaded.map((sneaker) => {
    const isInFavourite = isSneakerInFavourite(favouriteList, sneaker.id)

    if (fetchStatus !== 'success') {
      return <Skeleton key={uuidv4()} />
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
