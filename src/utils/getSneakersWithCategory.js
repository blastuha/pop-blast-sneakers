const getSneakersWithCategory = async (
  brand,
  shoesType,
  sex,
  fetchSneakers
) => {
  const brandFilter = `${brand ? `&title=${brand}` : ''}`
  const shoesTypeFilter = `${shoesType ? `&filter=${shoesType}` : ''}`
  const sexFilter = `${sex ? `&filter=${sex}` : ''}`

  fetchSneakers({ brandFilter, shoesTypeFilter, sexFilter })
}

export default getSneakersWithCategory
