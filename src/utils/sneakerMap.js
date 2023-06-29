import SneakerCard from '../components/SneakerCard/SneakerCard'

export const sneakerMap = (sneakersList, value, sneakerProps) => {
  const {
    isFavourites,
    isSneakerInFavourite,
    addToFavourites,
    deleteFromFavourites,
    addAlert,
    alert,
    favourites,
  } = sneakerProps

  return sneakersList
    .filter((sneaker) =>
      sneaker.title.toLowerCase().includes(value.toLowerCase().trim())
    )
    .map((sneaker) => {
      const isInFavourite = isSneakerInFavourite(favourites, sneaker.id)

      return (
        <SneakerCard
          key={sneaker.id}
          {...sneaker}
          isfavourites={isFavourites}
          isInFavourite={isInFavourite}
          addToFavourites={addToFavourites}
          deleteFromFavourites={deleteFromFavourites}
          addAlert={addAlert}
          alert={alert}
          favourites={favourites}
        />
      )
    })
}
