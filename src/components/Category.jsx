import React, { useState, useEffect, useRef } from 'react'
import Dropdown from './Dropdown'

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
      className='category'
      ref={categoryBlock}
    >
      <div className='category__item'>
        <div
          className='category__item-text'
          onClick={onChangeOpen}
        >
          {name}
        </div>
      </div>
      <Dropdown
        open={open}
        menu={menu}
        name={name}
      />
    </div>
  )
}

export default Category
