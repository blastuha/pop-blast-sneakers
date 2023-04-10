import React from 'react'
import styles from '../scss/modules/form.module.scss'

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
