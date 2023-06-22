import React from 'react'
import { useSelector } from 'react-redux'
import { filterSort } from '../../../redux/slices/filter&Sort/selectors'
import styles from './radio.module.scss'

const Radio = ({ name, onChange, mobile, defaultChecked }) => {
  const { selectedOption } = useSelector(filterSort)
  return (
    <div className={styles.radioBtn}>
      <label attr={mobile}>
        <input
          type='radio'
          name='radio-group'
          onChange={onChange}
          value={selectedOption}
          className={styles.realRadio}
          defaultChecked={defaultChecked}
        />
        {mobile && name}
        <span className={styles.customRadio}></span>
        {!mobile && name}
      </label>
    </div>
  )
}

export default Radio
