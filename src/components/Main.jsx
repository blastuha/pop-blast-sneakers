import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sneaker from './Sneaker'
import Category from './Category'
import { brands } from '../data'
import { types } from '../data'

const categoryList = [
  { name: 'Бренды', menu: brands },
  { name: 'Тип обуви', menu: types },
  { name: 'Пол', menu: ['Для мужчин', 'Для женщин'] },
]

function Main() {
  const [sneakers, setSneakers] = useState([])

  useEffect(() => {
    axios
      .get('https://63fcd20c859df29986c57847.mockapi.io/sneakerpal')
      .then((res) => setSneakers(res.data))
      .catch((err) => console.warn(err))
  }, [])

  // setTimeout(console.log(sneakers), 1000)

  return (
    <div className='main'>
      <div className='categories'>
        <div className='categories__container'>
          {categoryList.map((category) => {
            return (
              <Category
                name={category.name}
                menu={category.menu}
              />
            )
          })}
        </div>
      </div>
      <div className='main__container'>
        <div className='main__sneakers'>
          <Sneaker sneakers={sneakers} />
        </div>
      </div>
    </div>
  )
}

export default Main
