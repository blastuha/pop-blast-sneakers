import React, { useState } from 'react'

import Category from './Category'
import SortButton from '../UI/SortButton/SortButton'
import SortModal from '../SortModal/SortModal'

import useActions from '../../hooks/useActions'
import { categoryList } from '../../data'

import styles from './categories.module.scss'

function Categories() {
  const [sortModalOpen, setSortModalOpen] = useState(false)
  const { onChangeMobileSorting } = useActions()

  const onChangeOpen = () => {
    setSortModalOpen(!sortModalOpen)
  }

  return (
    <div className={styles.categories}>
      <div className={styles.categories__container}>
        <div>
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
        <SortButton
          categories='true'
          onChangeMobileSorting={onChangeMobileSorting}
        />
        <SortModal
          sortModalOpen={sortModalOpen}
          onChangeOpen={onChangeOpen}
        />
      </div>
    </div>
  )
}

export default Categories
