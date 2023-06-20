const getSneakersWithCategory = async (
  filtredValue,
  fetchSneakers,
  sortValue
) => {
  const filter = `${filtredValue ? `&filter=${filtredValue}` : ''}`
  const sort = `${sortValue ? `&sortBy=${sortValue}` : ''}`

  fetchSneakers({ filter, sort })
}

export default getSneakersWithCategory
