import React from 'react'
import Breadcrumb from '../../components/Breadcrump/Breadcrumb'
import Sneakers from '../../components/Sneakers/Sneakers'
import useWidth from '../../hooks/useWidth'

import { favouritesData } from '../../redux/slices/favourites/selectors'
import { useSelector } from 'react-redux'

import styles from './favourites.scss'

const Favourites = () => {
  const favourites = useSelector(favouritesData)
  console.log(favourites)
  const width = useWidth()

  return (
    <div className='favourites'>
      {width > 767 && <Breadcrumb />}
      <h3 className='favourites__header'>Избранное</h3>
      <div className='favourites__main'>
        <Sneakers
          sneakersList={favourites}
          value=''
          isfavouristes='true'
        />
      </div>
    </div>
  )
}

export default Favourites
