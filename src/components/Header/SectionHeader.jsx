import React from 'react'
import { useSelector } from 'react-redux'
import { categories } from '../../redux/slices/categories/selectors'
import useActions from '../../hooks/useActions'
import { TfiClose } from 'react-icons/tfi'

function SectionHeader() {
  const { shoesType, sex, brand } = useSelector(categories)
  const { clearAllFilters } = useActions()

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
        onClick={() => clearAllFilters()}
      />
    </div>
  ) : (
    ''
  )
}

export default SectionHeader
