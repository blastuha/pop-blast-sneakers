import React from 'react'
import styles from '../scss/modules/dynamicform.module.scss'

const DynamicForm = ({ handleSubmit, children }) => {
  return (
    <form
      class={styles.root}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  )
}

export default DynamicForm
