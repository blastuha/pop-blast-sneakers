import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import useClickOutside from '../../hooks/useClickOutside'
import styles from './category.module.scss'

function Category({ name, menu }) {
  const { open, itemRef, handleOpen } = useClickOutside()

  return (
    <div
      className={styles.category}
      ref={itemRef}
    >
      <div
        className={styles.category__item}
        onClick={handleOpen}
      >
        {name}
      </div>
      <Dropdown
        open={open}
        menu={menu}
        name={name}
        onChangeOpen={handleOpen}
      />
    </div>
  )
}

export default Category
