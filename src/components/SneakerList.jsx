import SneakerCard from '../components/SneakerCard/SneakerCard'

export const SneakerList = ({
  sneakers,
  isFavourites,
  isSneakerInFavourite,
  addToFavourites,
  deleteFromFavourites,
  addAlert,
  alert,
  favourites,
}) => {
  return sneakers.map((sneaker) => {
    const isInFavourite = isSneakerInFavourite(favourites, sneaker.id)
    // console.log(favourites, sneaker.id)
    return (
      <SneakerCard
        sneaker={sneaker}
        key={sneaker.id}
        {...sneaker}
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
