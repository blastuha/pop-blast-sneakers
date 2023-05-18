import React, { useState, useEffect, useRef } from 'react'
import styles from './category.module.scss'
import Dropdown from '../Header/Dropdown'

function Category({ name, menu }) {
  const [open, setOpen] = useState(false)
  const categoryBlock = useRef()

  useEffect(() => {
    window.addEventListener('click', (event) => {
      if (!categoryBlock.current.contains(event.target)) {
        setOpen(false)
      }
    })
  }, [open])

  const onChangeOpen = () => {
    setOpen(!open)
  }

  return (
    <div
      className={styles.category}
      ref={categoryBlock}
    >
      <div
        className={styles.category__item}
        onClick={onChangeOpen}
      >
        {name}
      </div>
      <Dropdown
        open={open}
        menu={menu}
        name={name}
        onChangeOpen={onChangeOpen}
      />
    </div>
  )
}

export default Category
