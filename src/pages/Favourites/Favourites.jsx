import React from 'react'
import { useSelector } from 'react-redux'

import SneakerList from '../../components/SneakerList'
import Breadcrumb from '../../components/Breadcrump/Breadcrumb'

import useActions from '../../hooks/useActions'
import useWidth from '../../hooks/useWidth'
import { favouritesData } from '../../redux/slices/favourites/selectors'

import styles from './favourites.module.scss'

const Favourites = () => {
  const favouriteList = useSelector(favouritesData)
  const width = useWidth()
  const isFavourites = 'true'
  const { deleteFromFavourites } = useActions()

  return (
    <div className={styles.favourites}>
      {width > 767 && <Breadcrumb />}
      <h3 className={styles.favourites__header}>Избранное</h3>
      <div className={styles.favourites__main}>
        <SneakerList
          isFavourites={isFavourites}
          favouriteList={favouriteList}
          deleteFromFavourites={deleteFromFavourites}
        />
      </div>
    </div>
  )
}

export default Favourites
