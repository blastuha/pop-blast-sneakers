import React from 'react'
import styles from './itemCounter.module.scss'

function ItemCounter({ decreaseQuantity, addQuantity, id, index, quantity }) {
  return (
    <div className={styles['item-counter']}>
      <div className={styles.counter}>
        <button
          className={styles['counter-button']}
          onClick={() => {
            decreaseQuantity(id, index)
          }}
        >
          -
        </button>
        <div className={styles['counter-value']}>
          <span
          >
            {quantity}
          </span>
        </div>
        <button
          className={styles['counter-button']}
          onClick={() => addQuantity(id, index)}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ItemCounter
