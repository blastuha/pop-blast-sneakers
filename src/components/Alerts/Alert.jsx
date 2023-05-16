import React from 'react'
import styles from './styles/alert.module.scss'

function Alert({ alert }) {
  return <div className={styles.root}>{alert.text}</div>
}

export default Alert
