const getSneakersWithCategory = async (filtredValue, fetchSneakers) => {
  const filter = `${filtredValue ? `&filter=${filtredValue}` : ''}`

  fetchSneakers({ filter })
}

export default getSneakersWithCategory
