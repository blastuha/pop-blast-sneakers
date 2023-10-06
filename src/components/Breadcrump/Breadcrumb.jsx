import React from 'react'

import Crumbs from './Crumbs'
import Crumb from './Crumb'

import styles from './breadcrump.module.scss'

function Breadcrumb({ sneakerData }) {
  return (
    <div
      className={`${styles.breadcrumb} ${sneakerData && styles['low-margin']}`}
    >
      <Crumb />
      <Crumbs sneakerData={sneakerData} />
    </div>
  )
}

export default Breadcrumb
