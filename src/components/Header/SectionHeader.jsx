import React from 'react'
import { useSelector } from 'react-redux'
import { categories } from '../../redux/slices/categories/selectors'
import useActions from '../../hooks/useActions'
import { TfiClose } from 'react-icons/tfi'

function SectionHeader() {
  const { filtredValue } = useSelector(categories)
  const { clearAllFilters } = useActions()

  return filtredValue ? (
    <div className='section-header'>
      <span className='section-title'>{filtredValue}</span>
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
