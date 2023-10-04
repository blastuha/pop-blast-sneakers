import React from 'react'
import { Link } from 'react-router-dom'
import useActions from '../../hooks/useActions'

import styles from './dropdown.module.scss'

function Dropdown({ menu, open, onChangeOpen }) {
  const { setFiltredValue } = useActions()
  return (
      <div className={styles.dropdown} style={{ display: open ? 'block' : 'none' }}>
        {menu.map((item, i) => {
          return (
              <div key={i} className={styles['dropdown__content']}>
                <Link
                    to='/'
                    className={styles['dropdown__content-item']}
                    onClick={() => {
                      onChangeOpen();
                      setFiltredValue(item);
                    }}
                >
                  {item}
                </Link>
              </div>
          );
        })}
      </div>
  )
}

export default Dropdown
