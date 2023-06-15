const getSneakersWithCategory = async (
  brand,
  shoesType,
  sex,
  fetchSneakers
) => {
  const brandFilter = `${brand ? `&title=${brand}` : ''}`
  const shoesTypeFilter = `${shoesType ? `&search=${shoesType}` : ''}`
  const sexFilter = `${sex ? `&filter=${sex}` : ''}`

  fetchSneakers({ brandFilter, shoesTypeFilter, sexFilter })
}

export default getSneakersWithCategory
