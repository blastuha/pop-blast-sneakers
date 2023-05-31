import React from 'react'
import styles from './nothingFound.module.scss'

const NothingFound = () => {
  return (
    <div className={styles['nothing-found']}>
      <span>Ничего не найдено ;(</span>
      <img
        src='https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png'
        alt='sad pic'
      />
    </div>
  )
}

export default NothingFound
