import React, { useContext } from 'react'
import { appContext } from '../App'

function SectionHeader() {
  const brand = useContext(appContext).brand
  const shoesType = useContext(appContext).shoesType
  const sex = useContext(appContext).sex

  const textShowing = () => {
    if (brand) return brand
    if (shoesType) return shoesType
    if (sex) return sex
  }

  return brand || shoesType || sex ? (
    <div className='section-header'>
      <span className='section-title'>{textShowing()}</span>
    </div>
  ) : (
    ''
  )
}

export default SectionHeader
