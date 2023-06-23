import React from 'react'
import styles from './radio.module.scss'

const Radio = ({ name, onChange, mobile, value, checked }) => {
  return (
    <div className={styles.radioBtn}>
      <label attr={mobile}>
        <input
          type='radio'
          name='radio-group'
          onChange={onChange}
          value={value}
          className={styles.realRadio}
          checked={checked}
        />
        {mobile && name}
        <span className={styles.customRadio}></span>
        {!mobile && name}
      </label>
    </div>
  )
}

export default Radio
