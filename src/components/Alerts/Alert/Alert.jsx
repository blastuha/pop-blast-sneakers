import React from 'react'
import styles from './alert.module.scss'

function Alert({ alert }) {
  return <div className={styles.alert}>{alert.text}</div>
}

export default Alert
