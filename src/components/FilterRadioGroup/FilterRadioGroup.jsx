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
    console.log(filtredValue)
    const { value } = e.target
    setFiltredValue(value)
  }

  return (
    <div className={styles.filter__radiogroup}>
      {menu.map((menuItem, i) => {
        return (
          <Radio
            key={menuItem}
            name={menuItem}
            onChange={onChange}
            value={menuItem}
            checked={filtredValue === menuItem}
          />
        )
      })}
    </div>
  )
}

export default FilterRadioGroup
