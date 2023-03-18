import React from 'react'
import Category from './Category'

function Categories({
  categoryList,
  onChangeBrand,
  onChangeShoesType,
  onChangeSex,
}) {
  return (
    <div className='categories'>
      <div className='categories__container'>
        {categoryList.map((category, i) => {
          return (
            <Category
              key={i}
              name={category.name}
              menu={category.menu}
              onChangeBrand={onChangeBrand}
              onChangeShoesType={onChangeShoesType}
              onChangeSex={onChangeSex}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Categories
