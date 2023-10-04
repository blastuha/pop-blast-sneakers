/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import styles from './breadcrump.module.scss'

const Crumb = ({ pageName, setFiltredValue, category }) => {
  return pageName ? (
    <div className={styles['breadcrumb__item']}>
      <div className={styles['breadcrumb__item-link']}>{pageName}</div>
    </div>
  ) : (
    <div className={styles['breadcrumb__item']}>
      <Link
        to='/'
        className={styles['breadcrumb__item-link']}
        onClick={() => setFiltredValue(category)}
      >
        {category ? category : 'Главная'}
      </Link>
    </div>
  )
}

export default Crumb
