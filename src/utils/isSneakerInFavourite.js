export const isSneakerInFavourite = (favouriteList, id) => {
  return favouriteList.find((item) => item.id === id)
}
