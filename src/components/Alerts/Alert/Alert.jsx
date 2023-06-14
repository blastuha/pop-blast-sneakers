import React from 'react'
import styles from './alert.module.scss'

function Alert({ alert, width }) {
  const mobileStyles = width <= 600 ? styles.mobile : ''
  return <div className={`${styles.alert} ${mobileStyles}`}>{alert.text}</div>
}

export default Alert
