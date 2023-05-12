import { useCallback } from 'react'
import { fetchSneakers } from '../redux/slices/sneakers/asyncActions'

const useGetSneakers = (brand, shoesType, sex) =>
  useCallback(async () => {
    const brandFilter = `${brand ? `&title=${brand}` : ''}`
    const shoesTypeFilter = `${shoesType ? `&filter=${shoesType}` : ''}`
    const sexFilter = `${sex ? `&filter=${sex}` : ''}`

    return fetchSneakers({ brandFilter, shoesTypeFilter, sexFilter })
  }, [brand, shoesType, sex])

export default useGetSneakers

// const getSneakers = useCallback(async () => {
//   const brandFilter = `${brand ? `&title=${brand}` : ''}`
//   const shoesTypeFilter = `${shoesType ? `&filter=${shoesType}` : ''}`
//   const sexFilter = `${sex ? `&filter=${sex}` : ''}`

//   fetchSneakers({ brandFilter, shoesTypeFilter, sexFilter })
// }, [brand, shoesType, sex, fetchSneakers])
