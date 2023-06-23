import React from 'react'
import { useSelector } from 'react-redux'
import Radio from '../UI/Radio/Radio'
import { filterSort } from '../../redux/slices/filter&Sort/selectors'
import useActions from '../../hooks/useActions'
import styles from './filterRadioGroup.module.scss'

const FilterRadioGroup = ({ menu }) => {
  const { filtredValue } = useSelector(filterSort)
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
            value={item}
            checked={filtredValue === item}
          />
        )
      })}
    </div>
  )
}

export default FilterRadioGroup
