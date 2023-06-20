import React from 'react'
import useActions from '../../hooks/useActions'
import styles from './filterRadioGroup.module.scss'

const FilterRadioGroup = ({ menu }) => {
  const { setFiltredValue } = useActions()

  const onChange = (e) => {
    const value = e.target.value
    setFiltredValue(value)
  }

  return (
    <div className={styles.filter__radiogroup}>
      {menu.map((item, i) => {
        return (
          <div
            className={styles.radioBtn}
            key={i}
          >
            <label>
              <input
                type='radio'
                name='radio-group'
                value={item}
                onChange={onChange}
                className={styles.realRadio}
              />
              <span className={styles.customRadio}></span>
              {item}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default FilterRadioGroup
