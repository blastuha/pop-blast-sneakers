import React from 'react';
import styles from './itemCounter.scss'

function ItemCounter({decreaseQuantity, addQuantity, id, index, quantity}) {
    return (
        <div className='item-counter'>
            <div className='counter'>
                <button
                    className='counter-button'
                    onClick={() => {
                        decreaseQuantity(id, index)
                    }}
                >
                    -
                </button>
                <div className='counter-value'>
              <span
                  type='text'
                  value={quantity}
              >
                {quantity}
              </span>
                </div>
                <button
                    className='counter-button'
                    onClick={() => addQuantity(id, index)}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default ItemCounter;