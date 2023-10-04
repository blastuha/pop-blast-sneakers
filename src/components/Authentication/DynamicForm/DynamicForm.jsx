/** @format */

import React from 'react'
import styles from './dynamicform.module.scss'

const DynamicForm = ({ handleSubmit, children }) => {
  return (
    <form
      className={styles.root}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  )
}

export default DynamicForm
