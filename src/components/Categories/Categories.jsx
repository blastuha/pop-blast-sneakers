import React from 'react'
import Category from './Category'
import { categoryList } from '../../data'

function Categories() {
  return (
    <div className='categories'>
      <div className='categories__container'>
        {categoryList.map((category, i) => {
          return (
            <Category
              key={i}
              name={category.name}
              menu={category.menu}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Categories
