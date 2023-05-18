import React from 'react'
import styles from './categories.module.scss'
import Category from './Category'
import { categoryList } from '../../data'

function Categories() {
  return (
    <div className={styles.categories}>
      <div className={styles.categories__container}>
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
