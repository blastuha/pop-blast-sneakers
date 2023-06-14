import React from 'react'
import Breadcrumb from '../../components/Breadcrump/Breadcrumb'
import Sneakers from '../../components/Sneakers/Sneakers'
import useWidth from '../../hooks/useWidth'

import { favouritesData } from '../../redux/slices/favourites/selectors'
import { useSelector } from 'react-redux'

import styles from './favourites.module.scss'

const Favourites = () => {
  const favourites = useSelector(favouritesData)
  const width = useWidth()

  return (
    <div className={styles.favourites}>
      {width > 767 && <Breadcrumb />}
      <h3 className={styles.favourites__header}>Избранное</h3>
      <div className={styles.favourites__main}>
        <Sneakers
          sneakersList={favourites}
          value=''
          isfavourites='true'
        />
      </div>
    </div>
  )
}

export default Favourites
