import React, { useState } from 'react'
import { brands } from '../data'
import { types } from '../data'
import Submenu from './Submenu'

function Categories({ sneakers }) {
  const [chosenCategory, setChosenCategory] = useState('')
  const [open, setOpen] = useState(false)

  const list = [
    { name: 'Бренды', menu: brands },
    { name: 'Тип обуви', menu: types },
    { name: 'Пол', menu: ['Для мужчин', 'Для женщин'] },
  ]

  const onClickCategoryList = (name) => {
    setChosenCategory(name)
    setOpen(!open)
    console.log(open, chosenCategory)
  }

  return (
    <div className='categories'>
      <div className='categories__container'>
        {list.map((category) => (
          <div
            key={category.name}
            className='categories__item'
            onClick={() => {
              onClickCategoryList(category.name)
            }}
          >
            {category.name}
          </div>
        ))}
        {open && (
          <Submenu
            list={list}
            chosenCategory={chosenCategory}
          />
        )}
      </div>
    </div>
  )
}

export default Categories
