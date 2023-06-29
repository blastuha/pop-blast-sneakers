// import React from 'react'
// import { Link } from 'react-router-dom'

// import { useSelector } from 'react-redux'

// import { AiFillHeart } from 'react-icons/ai'
// import { AiOutlineHeart } from 'react-icons/ai'

// import useAlerts from '../../hooks/useAlerts'
// import useActions from '../../hooks/useActions'
// import { alertObj } from '../../data'
// import { favouritesData } from '../../redux/slices/favourites/selectors'

// import SneakerCard from '../SneakerCard/SneakerCard'

// import styles from './sneakers.module.scss'

// function Sneakers({ sneakersList, value, isfavourites, fetchStatus }) {
//   const favourites = useSelector(favouritesData)

//   const { addToFavourites, deleteFromFavourites, addAlert } = useActions()
//   const alertsList = useAlerts()

//   const alert = alertObj(alertsList, '✓ Товар добавлен в избранное')

//   const isSneakerInFavourite = (id) => {
//     return favourites.find((item) => item.id === id)
//   }

//   if (fetchStatus !== 'success') {
//     return <h1>hello</h1>
//   }

//   return sneakersList
//     .filter((sneaker) =>
//       sneaker.title.toLowerCase().includes(value.toLowerCase().trim())
//     )
//     .map((sneaker, i) => (
//       <SneakerCard
//         isfavourites={isfavourites}
//         sneaker={sneaker}
//         i={i}
//         isSneakerInFavourite={isSneakerInFavourite}
//         addToFavourites={addToFavourites}
//         deleteFromFavourites={deleteFromFavourites}
//         addAlert={addAlert}
//         alert={alert}
//       />
//     ))
// }

// export default Sneakers
