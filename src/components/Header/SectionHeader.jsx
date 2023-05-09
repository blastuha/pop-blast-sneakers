import React from 'react'
import { TfiClose } from 'react-icons/tfi'
import { clearAllFilters } from '../../redux/slices/categoriesSlice'
import { useDispatch, useSelector } from 'react-redux'

function SectionHeader() {
  const shoesType = useSelector((state) => state.categories.shoesType)
  const sex = useSelector((state) => state.categories.sex)
  const brand = useSelector((state) => state.categories.brand)
  const dispatch = useDispatch()

  const textShowing = () => {
    if (brand) return brand
    if (shoesType) return shoesType
    if (sex) return sex
  }

  return brand || shoesType || sex ? (
    <div className='section-header'>
      <span className='section-title'>{textShowing()}</span>
      <TfiClose
        className='section-delete'
        onClick={() => dispatch(clearAllFilters())}
      />
    </div>
  ) : (
    ''
  )
}

export default SectionHeader
