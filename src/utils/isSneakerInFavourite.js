export const isSneakerInFavourite = (favourites, id) => {
  return favourites.find((item) => item.id === id)
}
