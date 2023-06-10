import React from 'react'
import styles from '../../../scss/modules/dynamicform.module.scss'

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
