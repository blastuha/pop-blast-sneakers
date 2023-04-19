import React, { useContext } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { appContext } from '../../App'

function SectionHeader() {
  const brand = useContext(appContext).brand
  const shoesType = useContext(appContext).shoesType
  const sex = useContext(appContext).sex
  const clearAllFilters = useContext(appContext).clearAllFilters

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
        onClick={clearAllFilters}
      />
    </div>
  ) : (
    ''
  )
}

export default SectionHeader
