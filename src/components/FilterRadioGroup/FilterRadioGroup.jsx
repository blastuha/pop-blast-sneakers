import React from 'react'
import Radio from '../UI/Radio/Radio'
import useActions from '../../hooks/useActions'
import styles from './filterRadioGroup.module.scss'

const FilterRadioGroup = ({ menu }) => {
  const { setFiltredValue } = useActions()

  const onChange = (e) => {
    const { value } = e.target
    setFiltredValue(value)
  }

  return (
    <div className={styles.filter__radiogroup}>
      {menu.map((item, i) => {
        return (
          <Radio
            key={i}
            name={item}
            onChange={onChange}
          />
        )
      })}
    </div>
  )
}

export default FilterRadioGroup
