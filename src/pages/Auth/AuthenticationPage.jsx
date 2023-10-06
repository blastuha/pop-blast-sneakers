import React from 'react'

import { Outlet, useLocation } from 'react-router-dom'
import { authTitles } from '../../data'

import styles from './authenticationpage.module.scss'

const AuthenticationPage = () => {
  let location = useLocation()

  const dynamicTitle = () => {
    return authTitles.map((obj) => {
      if (location.pathname === obj.path) {
        return <span key={obj.title}>{obj.title}</span>
      } else {
        return ''
      }
    })
  }

  return (
    <div className={styles.person}>
      <div className={styles.person__container}>
        <div className={styles.person__header}>
          <span className={styles['person-title']}>{dynamicTitle()}</span>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthenticationPage
