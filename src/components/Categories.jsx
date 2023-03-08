import React from 'react'
import Category from './Category'

function Categories({ categoryList }) {
  return (
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
  )
}

export default Categories
